import { asyncScheduler} from 'rxjs';

const saludar = () => {console.log('Hola como estas?')};
const saludar2 = nombre => {console.log(`hola ${nombre}`)};

asyncScheduler.schedule(saludar, 2000);
asyncScheduler.schedule(saludar2, 2000, 'Donaldo');

const subs =asyncScheduler.schedule(function(state){
    console.log('state', state);
    this.schedule(state + 1, 1000);
},3000,0);

asyncScheduler.schedule(()=>{subs.unsubscribe()},8000);