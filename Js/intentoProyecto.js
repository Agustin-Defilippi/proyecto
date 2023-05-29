const viajesNorte = [{destino:"salta",duracion:"5 dias",boleto:"ida y vuelta",hospedaje:"Andina Hotel",precioPaquete:82500,categoria:"oferta"},{destino:"formosa",duracion:"5 dias",boleto:"ida y vuelta",hospedaje:"Solar del lago cabañas",precioPaquete:68900,categoria:"oferta"},{destino:"Misiones",duracion:"7 dias",boleto:"ida y vuelta",hospedaje:"El salto del tigre",precioPaquete:112700,categoria:"alta"}];

const viajesCentro= [{destino:"San luis",duracion:"3 dias",boleto:"ida y vuelta",hospedaje:"La chaqueñita cabañas",precioPaquete:52000,categoria:"oferta"},{destino:"Buenos Aires",duracion:"3 dias",boleto:"ida y vuelta",hospedaje:"Hotel Monaco",precioPaquete:39500,categoria:"baja"},{destino:"San Juan",duracion:"7 dias",boleto:"ida y vuelta",hospedaje:"Temu Hoteles",precioPaquete:131700,categoria:"alta"}];

const viajesSur = [{destino:"Santa Cruz",duracion:"4 dias",boleto:"ida y vuelta",hospedaje:"Cabañas el Arriero",precioPaquete:100000,categoria:"alta"},{destino:"cafayate",duracion:"5 dias",boleto:"ida y vuelta",hospedaje:"Suites la Ferrere",precioPaquete:185300,categoria:"oferta"}];


const viaje = (valor) =>{
    let salida ="";

    if((valor === "NORTE ARGENTINO") || (valor === "NORTE")){

        viajesNorte.forEach(elemento =>{salida+=("Destino:"+" "+elemento.destino+"\n"+"Duracion:"+" "+elemento.duracion+"\n"+"Boleto:"+" "+elemento.boleto+"\n"+"Hospedaje:"+" "+elemento.hospedaje+"\n"+"Precio:"+" "+elemento.precioPaquete+"\n"+"Categoria:"+" "+elemento.categoria+"\n\n")});
    
    }else if((valor === "CENTRO ARGENTINO") || (valor === "CENTRO")){
    
        viajesCentro.forEach(elemento =>{salida+=("Destino:"+" "+elemento.destino+"\n"+"Duracion:"+" "+elemento.duracion+"\n"+"Boleto:"+" "+elemento.boleto+"\n"+"Hospedaje:"+" "+elemento.hospedaje+"\n"+"Precio:"+" "+elemento.precioPaquete+"\n"+"Categoria:"+" "+elemento.categoria+"\n\n")});
    
    }else if((valor === "SUR ARGENTINO") || (valor === "SUR")){
    
        viajesSur.forEach(elemento =>{salida+=("Destino:"+" "+elemento.destino+"\n"+"Duracion:"+" "+elemento.duracion+"\n"+"Boleto:"+" "+elemento.boleto+"\n"+"Hospedaje:"+" "+elemento.hospedaje+"\n"+"Precio:"+" "+elemento.precioPaquete+"\n"+"Categoria:"+" "+elemento.categoria+"\n\n")});
    }else{
        alert("ingreso incorrecto de datos")
    }

    return salida
}


let paquete = prompt("ingrese que el destino donde usted quiere viajar"+"\n\n"+"1)Norte Argentino"+"\n"+"2)Centro Argentino"+"\n"+"3)Sur Argentino").toUpperCase();

console.log(viaje(paquete));

let destinoElegido= prompt("ingrese el el destino que desea ,dentro del paquete"+" "+"("+paquete+")"+" "+"que ha elegido.").toUpperCase();







