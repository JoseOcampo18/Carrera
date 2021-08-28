export default class Corredor{

    constructor(){
        this._posicion = 0;
    }

    _getPosicion(){
        return this._posicion;
    }

    _setPosicion(posicion){
        this._posicion = posicion;
    }

    avanzar(dado){
        if(dado == 3){
            this._posicion = this._posicion + 3;
        }
        else if(dado == 1 || dado == 2){
            this._posicion = this._posicion + 1;
        }
        else{
            this._posicion = this._posicion + 2;
        }
    }

}