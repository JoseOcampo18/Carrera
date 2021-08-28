import Dado from "./dado.js";
import Corredor from "./corredor.js";

let d = new Dado();

let c1 = new Corredor();
let c2 = new Corredor();
let x = 0;

while (x == 0) {
    c1.avanzar(d.lanzar());
    console.log(`La posición del corredor uno es ${c1._getPosicion()}`);
    c2.avanzar(d.lanzar());
    console.log(`La posición del corredor dos es ${c2._getPosicion()}`);

    if(c1._getPosicion() > 99 || c2._getPosicion() > 99){
        x++;
    }
}

if(c1._getPosicion() > 99 && c2._getPosicion() < 100){
    console.log(`El ganador es el corredor 1`);
}
else if(c1._getPosicion() < 100 && c2._getPosicion() > 99){
    console.log(`El ganador es el corredor 2`);
}
else{
    console.log(`El resultado de la carrera es un empate`);
}