export default class Cl_Cafetin{

    constructor(){
        this.acumEmpanadas = 0;
        this.acumPastelitos = 0; 
        this.acumJugo = 0;
        this.acumGanancias = 0;
     }    

   procesarComida(c){
    this.acumEmpanadas+=c.devolverEmpanadas();
    this.acumPastelitos+=c.devolverPastelitos();
    this.acumJugo+=c.devolverJugo();
    this.acumGanancias+=c.PagoComensal();
   }
   
  
   devolverRGanancia(){
    return this.acumGanancias;
   }

   devolverREmpanadas(){
    return this.acumEmpanadas;
  }

  devolverRPastelitos(){
    return this.acumPastelitos;
  }

  devolverRJugo(){
    return this.acumJugo;
  }

  restanteEmpanadas(){
    return 20-this.acumEmpanadas;
   }
   restantePastelitos(){
    return 15-this.acumPastelitos;
   }
   restanteJugo(){
    return 10-this.acumJugo;
   }

    }