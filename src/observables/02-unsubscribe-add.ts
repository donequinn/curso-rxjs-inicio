import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.log('error:', error),
    complete: () => console.log('completado')
}

const intervalo$ = new Observable<number>(subscriber => {
    let count = 0;
    const interval = setInterval(() => {
        count++;
        subscriber.next(count);
        console.log(count);
    }, 1000);
    setTimeout(() => {
        subscriber.complete();
    }, 2500);
    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
});

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs1.add(subs2).add(subs3);

setTimeout(()=>{
    subs1.unsubscribe();
    console.log('Completado time out');
},6000);