export default class Cl_Comida {
    constructor(e,p,j){
        this.empanadas = e;
        this.pastelitos = p;
        this.jugo = j;
    }

    set empanadas(e){
        this._empanadas=+e;
    }
    set pastelitos(p){
        this._pastelitos=+p;
    }
    set jugo(j){
        this._jugo=+j;
    }
    get empanadas(){
       return this._empanadas;
    }
    get pastelitos(){
       return this._pastelitos;
    }
    get jugo(){
       return this._jugo;
    }

    calcularPagoEmpanadas(){
        if (this.empanadas > 0) {
            return this.empanadas * 20;
        }
        else {return 0;}
    }
    calcularPagoPastelitos(){
        if (this.pastelitos > 0) {
            return this.pastelitos * 10;
        }
        else {return 0;}
    }
    
    calcularJugo(){
        if (this.jugo == 1) {
            return 5;
        }
        else{return 0;}
    }

    PagoComensal(){
        return this.calcularJugo() + this.calcularPagoEmpanadas() + this.calcularPagoPastelitos();.toFixed(2)
    }

    devolverEmpanadas(){
        return this.empanadas;
    }
    devolverPastelitos(){
        return this.pastelitos;
    }
    devolverJugo(){
        return this.jugo;
    }
}
