import { from, fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";


const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat ut nibh vel placerat. Mauris molestie purus odio, vel hendrerit tellus interdum vitae. Aenean ornare libero a urna lobortis viverra. Quisque quam dui, pulvinar et massa a, imperdiet maximus sapien. Proin sodales erat convallis fringilla porttitor. Pellentesque quis sapien pulvinar, convallis justo ut, malesuada nulla. Curabitur tincidunt enim sem, sit amet bibendum tortor fermentum at. Cras nec convallis eros, iaculis elementum arcu. Sed lacinia faucibus nunc, in ullamcorper lorem placerat sit amet. Pellentesque sit amet tincidunt lacus. Vestibulum nec pellentesque odio. Suspendisse sodales ut lectus eu euismod.
<br/><br/>
Curabitur porttitor imperdiet ligula sit amet pellentesque. Sed velit purus, ornare at suscipit sit amet, ornare sed diam. Mauris porta lectus erat, facilisis feugiat ex porta id. Donec quis semper ex. Curabitur a urna dui. Sed vitae lectus tempor, efficitur libero nec, hendrerit nisl. Donec condimentum, elit sit amet rutrum fermentum, ipsum nisi vestibulum eros, at tempor ante tortor quis nunc. Integer maximus volutpat sapien rhoncus fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
<br/><br/>
Etiam mollis quam nunc, a gravida ligula molestie vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim ipsum ut massa vehicula egestas. Aenean erat neque, euismod vel dui in, tristique sagittis enim. Curabitur egestas velit eget urna venenatis dignissim. Fusce cursus ante diam, vitae rhoncus tellus maximus a. Morbi varius neque eu tincidunt tempus. Duis ultricies nisl at augue posuere, eu sagittis odio molestie. Integer consectetur nulla non urna rhoncus, eu luctus felis pretium. Cras feugiat commodo nulla, sit amet condimentum erat mattis id. Curabitur at libero sodales, malesuada turpis eu, ornare justo. Donec euismod bibendum malesuada. Donec porttitor tortor et luctus molestie. Sed eu elit turpis.
<br/><br/>
Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus convallis leo in elementum vehicula. In pulvinar finibus mollis. Praesent nec massa imperdiet, aliquet velit at, ornare augue. Nunc ultricies lorem augue, sed tempus felis eleifend eget. Cras eu tempus elit, sit amet consectetur justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras semper velit non ipsum faucibus, eu luctus mauris elementum. Donec nisi odio, pulvinar at feugiat nec, pellentesque nec sapien.
<br/><br/>
Nullam eget viverra arcu, eu vulputate purus. Aenean a rutrum felis. Nulla pharetra justo in nisl rutrum, non ultricies turpis tincidunt. Morbi aliquet tristique sem, eu scelerisque sapien. Pellentesque sem leo, hendrerit vitae magna at, hendrerit dictum quam. Donec ut nibh quam. In ligula neque, mattis eget metus sit amet, vulputate sagittis dolor.
`;
const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

//funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

//stream
const scroll$ = fromEvent(document, 'scroll');

const progress$ = scroll$.pipe(
    map(calcularPorcentajeScroll),
    tap(console.log)
);

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});