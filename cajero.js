var botonR = document.getElementById("Recibir");
var a = document.getElementById("dineroU");
var dinero = 0;
var r = document.getElementById("res")

class Billetes{
    constructor(v, c){
        this.valor = v;
        this.cantidad = c;
    }
}

var caja = [];
// caja.push(new Billetes(100, 2));
caja.push(new Billetes(50, 20));
caja.push(new Billetes(20, 10));
caja.push(new Billetes(10, 20));
caja.push(new Billetes(5, 25));
var div = 0;
var entregado = [];
var papeles = 0;

botonR.addEventListener("click", repartirDinero);
function repartirDinero(){
    dinero = parseInt(a.value);
    for(i of caja){
        // console.log(i);
        if(dinero > 0){
            div = Math.floor(dinero/i.valor);
            if(div > i.cantidad){
                papeles = i.cantidad;
            }
            else{
                papeles = div;
            }
            entregado.push(new Billetes(i.valor, papeles));
            dinero -= (i.valor * papeles);
        }
    }
    if(dinero >0){
        r.innerHTML = "No había la suficiente cantidad de dinero en la caja";
    }
    else{
    for(e of entregado){
        if(e.cantidad >0){
        r.innerHTML += e.cantidad +"  billetes de $" +e.valor +"<br/>";
    }
}
    console.log(entregado);
}
}

// Añadir "banco"