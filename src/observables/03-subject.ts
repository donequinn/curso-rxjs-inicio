import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.log('error:', error),
    complete: () => console.log('completado')
}

const intervalo$ = new Observable<number>(subs => {

    const intervaloID = setInterval(() => {
        subs.next(Math.random());
    }, 1000);

    return () => {
        clearInterval(intervaloID);
        console.log('Intervalo destruido');
    };
});

const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);


const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
},3500);