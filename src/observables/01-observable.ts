import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Siguiente [next]:', value),
    error: error => console.log('error [obs]:', error),
    complete: () => console.log('completado [obs]')
}

const obs$ = new Observable<string>(subs => {
    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');
    subs.complete();

    subs.next('Hola');
    subs.next('Mundo');
});

obs$.subscribe(observer);
