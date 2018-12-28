class usuario{
    constructor(n, v, s, ba, c, d){
        this.nombre = n;
        this.verificado = v;
        this.saldo = s;
        this.banco_asociado = ba;
        this.cliente = c;
        this.destino = d;
    }
}

var bancos = [];
bancos.push("Bancoco");
bancos.push("Banamex");
bancos.push("Bancololo");

var usuarios = [];
usuarios.push(new usuario("Juan", true, 1500,"Bancoco", false, false));
usuarios.push(new usuario("Pepe", true, 3700,"Banamex", false, false));
usuarios.push(new usuario("Maria", true, 2400,"Bancoco", false, false));
// Cuál es tu usuario? <input type="button" value ="Juan" id="uJuan"/><input type="button" value ="Pepe" id="uPepe"/>
var h_actual = document.getElementById("h_actual");
var u_seleccionado = false;
var u_ss = document.getElementById("u_ss");

var test = document.getElementById("test");

var botoncito = document.getElementById("boton");
var s_juan = document.getElementById("s_juan");
var s_pepe = document.getElementById("s_pepe");
var b_juan = document.getElementById("b_juan");
var b_pepe = document.getElementById("b_pepe");
var u0_selector = document.getElementById("uJuan");
var u1_selector = document.getElementById("uPepe");
var v_juan = document.getElementById("v_juan");
var v_pepe = document.getElementById("v_pepe");
var mnt = document.getElementById("mt");

function uSS0(){
    usuarios[0].cliente = true;
    usuarios[1].destino = true;
    u_seleccionado = true;
    u_ss.innerHTML = "Ya seleccionaste a Juan"
    // alert("Seleccionaste a Juan");
}
function uSS1(){
    usuarios[1].cliente = true;
    usuarios[0].destino = true;
    u_seleccionado = true;
    u_ss.innerHTML = "Ya seleccionaste a Pepe"
    // alert("Seleccionaste a Pepe");
}

u0_selector.addEventListener("click", uSS0);
u1_selector.addEventListener("click", uSS1);

var comprobador = 0;
var hora_actual = 10;
var costo = 0;
var hora_t = false;

var ejecutar = botoncito.addEventListener("click", transferencia);

function transferencia() {
    var monto = parseInt(mnt.value);
    if (hora_actual > 9 && hora_actual < 12 || hora_actual > 15 && hora_actual < 20) {
        hora_t = true;
    }
    for (u in usuarios) {
        if (usuarios[u].verificado) {
            comprobador += 1;
        }
    }
    if (usuarios[0].banco_asociado != usuarios[1].banco_asociado) {
        costo = costo + 100;
    }
    if (usuarios[0].cliente) {
        if (comprobador >= 2 && usuarios[0].saldo >= monto + costo && hora_t == true) {
            usuarios[0].saldo -= monto + costo;
            usuarios[1].saldo += monto;
            alert("Se realizo la transferencia de $"+ monto +" pesos a Pepe, costo de la transacción: " + costo);
        }
        else {
            alert("No se puede realizar la transaccion!!");
        }
    }
    if (usuarios[1].cliente) {
        if (comprobador >= 2 && usuarios[0].saldo >= monto + costo && hora_t == true) {
            usuarios[1].saldo += -monto + costo;
            usuarios[0].saldo += monto;
            alert("Se realizo la transferencia de $"+ monto +" pesos a Juan, costo de la transacción: " + costo);
        }
        else {
            alert("No se puede realizar la transaccion!!");
        }
    }
    s_juan.innerHTML ="<center>" + usuarios[0].saldo + "</center>"
    s_pepe.innerHTML ="<center>" + usuarios[1].saldo + "</center>"
}

s_juan.innerHTML ="<center>" + usuarios[0].saldo + "</center>"
b_juan.innerHTML ="<center>" + usuarios[0].banco_asociado + "</center>"
s_pepe.innerHTML ="<center>" + usuarios[1].saldo + "</center>"
b_pepe.innerHTML ="<center>" + usuarios[1].banco_asociado + "</center>"
h_actual.innerHTML ="<i>La hora actual es: "+ hora_actual +"</i>";
if(usuarios[0].verificado){
v_juan.innerHTML ="<center>Verificado</center>"
}
if(usuarios[1].verificado){
v_pepe.innerHTML ="<center>Verificado</center>"
}

 
