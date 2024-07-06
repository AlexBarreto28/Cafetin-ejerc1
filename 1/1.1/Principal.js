import Cl_Cafetin from "./Cl_Cafetin.js";
import Cl_Comida from "./Cl_Comida.js";


let Comida1=new Cl_Comida(0,3,0);
let Comida2=new Cl_Comida(2,0,1);
let Comida3=new Cl_Comida(5,0,0);
let Comida4=new Cl_Comida(0,2,1);
let Comida5=new Cl_Comida(10,0,0);

let Cafetin=new Cl_Cafetin();

Cafetin.procesarComida(Comida1);
Cafetin.procesarComida(Comida2);
Cafetin.procesarComida(Comida3);
Cafetin.procesarComida(Comida4);
Cafetin.procesarComida(Comida5);

let salida = document.getElementById("salida");
salida.innerHTML+= "<br> Elvis paga Bs." +Comida1.PagoComensal();
salida.innerHTML+= "<br> Joao paga Bs." +Comida2.PagoComensal();
salida.innerHTML+= "<br> Melisa paga Bs." +Comida3.PagoComensal();
salida.innerHTML+= "<br> Maria paga Bs." +Comida4.PagoComensal();
salida.innerHTML+= "<br> Rosa paga Bs." +Comida5.PagoComensal();
salida.innerHTML+= "<br><br> Quedan " +Cafetin.restanteEmpanadas() + " empanadas";
salida.innerHTML+= "<br> Quedan " +Cafetin.restantePastelitos() + " pastelitos";
salida.innerHTML+= "<br> Quedan " +Cafetin.restanteJugo() + " jugos";
salida.innerHTML+= "<br> Ganancia Bs." +Cafetin.devolverRGanancia();