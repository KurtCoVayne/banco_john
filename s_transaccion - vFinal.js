var ddd; // Empiezan en ANY
var ccc;
var u_seleccionado;
var u_destino;

class usuario{
    constructor(n, v, s, ba, c, d, aSP){
        this.nombre = n;
        this.verificado = v;
        this.saldo = s;
        this.banco_asociado = ba;
        this.cliente = c;
        this.destino = d;
        this.arraySpace = aSP;
    }
    mostrarT(){ // Crea la tabla de cada usuario
        var tr = document.createElement("tr");
        var TablaI = document.getElementById("TablaI");
        TablaI.appendChild(tr);
            var td_n = document.createElement("td");
                td_n.id ="n_"+this.nombre;
                TablaI.appendChild(td_n);
                    var nn = document.getElementById("n_"+this.nombre);
                    nn.innerHTML = "<center><strong>" + this.nombre + "</strong></center>" //Print Nombre
            var td_s = document.createElement("td");
                td_s.id ="s_"+this.nombre;
                TablaI.appendChild(td_s);
                    var ss = document.getElementById("s_"+this.nombre);
                    ss.innerHTML ="<center>" + this.saldo + "</center>" // Print Saldo
            var td_b = document.createElement("td");
                td_b.id ="b_"+this.nombre;
                TablaI.appendChild(td_b);
                    var bb = document.getElementById("b_"+this.nombre); 
                    bb.innerHTML ="<center>" + this.banco_asociado + "</center>" // Print Banco
            var td_v = document.createElement("td");
                td_v.id ="v_"+this.nombre;
                TablaI.appendChild(td_v);
                var vv = document.getElementById("v_"+this.nombre);
                if(this.verificado){ // Print Verificado
                    vv.innerHTML ="<center>Verificado</center>" 
                }
                else{
                    vv.innerHTML ="<center>No Verificado</center>" 
                }
    }
    mostrarBU(){ // Muestra los botones de seleccion de usuario
        let u_ss = document.getElementById("u_ss");
        var array = this.arraySpace;
        var  u_selectors = [];
            u_selectors.push[this.nombre] = "u_"+this.nombre;
        var botonesC = document.getElementById("u_ss");
        var input = document.createElement("input");
        input.type ="button";
        input.value = this.nombre;
        input.id ="u_"+this.nombre;
        input.style = "margin:10px;"   
        botonesC.appendChild(input);
        u_selectors[this.nombre] = document.getElementById("u_"+this.nombre)
        u_selectors[this.nombre].addEventListener("click", function uSS(){
            alert("Seleccionaste a: "+ usuarios[array].nombre)
            usuarios[array].cliente = true;
            ccc = array;
            u_seleccionado = true;
            usuarios[array].mostrarBD();
            u_ss.innerHTML = "Ya seleccionaste a: " + usuarios[array].nombre+"<br/> Ahora escoge el destino de la transacción: ";
        })
    }
    mostrarBD(){ // Muestra los botones de seleccion de destino
        var eliminarID = this.nombre
        function eliminarUD(eliminarID){ // Elimina el sobrante (El Cliente seleccionado anteriormente para evitar redundancias)
            var dthis = document.getElementById("d_"+eliminarID);
            container.removeChild(dthis);
        }
        for(let e in usuarios){ // Crea cada boton de seleccionador de Destino
            var d_selectors = [];
            d_selectors.push[e] = "d_"+ usuarios[e].nombre;
        
        var input = document.createElement("input");
        input.type ="button";
        input.value = usuarios[e].nombre;
        input.id ="d_"+usuarios[e].nombre;
        input.style = "margin:10px;"   
        container.appendChild(input);
        d_selectors[usuarios[e].nombre] = document.getElementById("d_"+usuarios[e].nombre).addEventListener('click', uDD.bind(this, e));
    }
    eliminarUD(eliminarID);
} 
}

var uDD = function(v){ // Accion ejecutada por el boton
    ddd = parseInt(v);
    usuarios[v].destino = true; 
    u_destino = true;
    container.innerHTML = "Ya seleccionaste el destino: "+usuarios[v].nombre
}

var hora_actual = 10; // Aquí se selecciona la hora actual
var pHA = document.getElementById("h_actual").innerHTML ="La hora actual es: "+ hora_actual
var botoncito = document.getElementById("boton").addEventListener("click", function transferencia() { // Ejecutar transferencia
    var hora_t = false; // Empieza en false
    var costo = 0;
    var comprobador = 0;
    var mnt = parseInt(document.getElementById("mt").value); // GET MONTO
    if(!u_seleccionado){ // Si todavia no se selecciona un usuario : Error
       alert("Todavia no se ha seleccionado un Usuario");
    }
    else if(!u_destino){ // Si todavia no se selecciona un destino : Error
        alert("Todavia no se ha seleccionado un Destino");
    }
    else{
    if (usuarios[ccc].verificado){ // Cliente está verficado?
        comprobador += 1;
    }
    if (usuarios[ddd].destino) { // Destino está verificado?
        comprobador += 1;
    } // Si los dos están verificados Comprobador == 2

    // Controlador de la hora
    if (hora_actual > 9 && hora_actual < 12 || hora_actual > 15 && hora_actual < 20) { // La hora actual está entre 9 y 12 o || entre las 3 y las 8?
        hora_t = true;
    }
        // Transferencia CHECK de todo
    if (usuarios[ccc].banco_asociado != usuarios[ddd].banco_asociado) { // El banco del cliente y el destino es el mismo?
        costo = costo + 100;
    }
    if (usuarios[ccc]) { // Si usuarios (Cliente seleccionado)
        if (comprobador >= 2 && usuarios[ccc].saldo >= mnt + costo && hora_t) { // Si comprobador, saldo + costo, y hora booleanos == 1;
            usuarios[ccc].saldo -= mnt + costo; // Resta cliente
            usuarios[ddd].saldo += mnt;  // Suma Destino
            alert("Se realizo la transferencia de "+usuarios[ccc].nombre+"  con el valor de $" + mnt + " pesos a "+usuarios[ddd].nombre+ ", costo de la transacción: " + costo);
        }
        else {
            alert("No se puede realizar la transaccion!!");
        }
    }
}
    for(let s in usuarios){
        var actualizadorS = document.getElementById("s_"+usuarios[s].nombre)
        actualizadorS.innerHTML = "<center>" + usuarios[s].saldo + "</center>"
    }
});