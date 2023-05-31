 const viajes = [{destino:"salta",duracion:"5 dias",boleto:"ida y vuelta",hospedaje:"Andina Hotel",precio:82500,categoria:"oferta",zona:"norte"}
,{destino:"formosa",duracion:"5 dias",boleto:"ida y vuelta",hospedaje:"Solar del lago cabañas",precio:68900,categoria:"oferta",zona:"norte"}
,{destino:"misiones",duracion:"7 dias",boleto:"ida y vuelta",hospedaje:"El salto del tigre",precio:112700,categoria:"alta",zona:"norte"},
{destino:"san luis",duracion:"3 dias",boleto:"ida y vuelta",hospedaje:"La chaqueñita cabañas",precio:52000,categoria:"oferta",zona:"centro"},
{destino:"buenos aires",duracion:"3 dias",boleto:"ida y vuelta",hospedaje:"Hotel Monaco",precio:39500,categoria:"baja",zona:"centro"},
{destino:"san juan",duracion:"7 dias",boleto:"ida y vuelta",hospedaje:"Temu Hoteles",precio:131700,categoria:"alta",zona:"centro"},
{destino:"santa cruz",duracion:"4 dias",boleto:"ida y vuelta",hospedaje:"Cabañas el Arriero",precio:100000,categoria:"alta",zona:"sur"},
{destino:"cafayate",duracion:"5 dias",boleto:"ida y vuelta",hospedaje:"Suites la Ferrere",precio:185300,categoria:"oferta",zona:"sur"}];

const eleccionViaje = () =>{
    
    let paqueteViaje = "";

    while ((!isNaN(paqueteViaje)) || (paqueteViaje.trim()=== "") || ((paqueteViaje !=="norte") && (paqueteViaje !=="centro") && (paqueteViaje !=="sur"))){
        paqueteViaje = prompt("ingrese que el destino donde usted quiere viajar dentro del pais"+"\n\n"+"*Norte"+"\n"+"*Centro"+"\n"+"*Sur").toLowerCase();
    }
    const zonaViaje = viajes.filter(elementos => elementos.zona === paqueteViaje);

    if(zonaViaje.length > 0){
        let salida1= "";

        zonaViaje.forEach(elemento =>{(salida1+=`Destino: ${elemento.destino}.\n Duracion: ${elemento.duracion}. \n Pasaje: ${elemento.boleto}. \n Hospedaje: ${elemento.hospedaje}. \n Precio :  $${elemento.precio}. \n Zona: ${elemento.zona}. \n\n`)});

        alert(`Paquetes de viaje disponibles en zona (${paqueteViaje}) del pais. \n\n ${salida1}`)

        let destinoZonaViaje = prompt(`Ingrese que paquete de viaje desea contratar, eligiendo acorde a la zona (${paqueteViaje}) que ingreso.`).toLocaleLowerCase();

        while ((!isNaN(destinoZonaViaje)) || (destinoZonaViaje.trim()==="")){
            destinoZonaViaje = prompt(`Ingrese que paquete de viaje desea contratar, eligiendo acorde a la zona (${paqueteViaje}) que ingreso.`).toLocaleLowerCase();
        }

        const destinoViajeFinal = zonaViaje.find(elemento => elemento.destino === destinoZonaViaje);
        
        let salida2="";

        for (const elemento in destinoViajeFinal) {
            salida2+= elemento+":"+" "+destinoViajeFinal[elemento]+`\n`;
        }

        alert(`Felicitaciones usted ha elegido con exito (${destinoZonaViaje}) como paquete de viaje!!! \n\n ${salida2}`);

        let resultado =  destinoViajeFinal;

        return resultado

    }else{
        alert("Ingreso datos incorrectos,vuelva a repetir el proceso");
    }
    
}

const viaje = eleccionViaje();

const subTotal = (valor) =>{
    
    return (valor / 1.21).toFixed(2);
}
const efectivo = (valor) =>{
    
    return (valor * 0.8).toFixed(2);
}
const cuotas = (valor) =>{
    
    return (valor * 1.10).toFixed(2);
}
const ahora12 = (valor) =>{
    
    return (valor * 1.20).toFixed(2);
}

const datosPasaporte = () =>{
    
    alert("Completa los siguientes campos de informacion para ir generando su pasaporte!");

    let nombrePasajero= prompt("Ingrese su nombre completo.").toLocaleLowerCase();
    let apellidoPasajero= prompt("Ingrese su apellido.").toLocaleLowerCase();
    let fecha = prompt("Ingrese la fecha actual, por ej: 12/10/2023.").toLocaleLowerCase();
    let provincia = prompt("Ingrese provincia donde reside.").toLocaleLowerCase();
    let ciudadSalida= prompt("Ingrese ciudad donde reside.").toLocaleLowerCase();
    let codigoPostal= parseInt(prompt("Ingrese codigo postal acorde a lo ingresado en los campos anteriores."));

    viaje.entidadEmisora="Defilippi SpaceTour.";
    viaje.fechaEmision= fecha;
    viaje.numeroPasaporte = "(7235545411545215)";
    viaje.nombre= nombrePasajero;
    viaje.apellido= apellidoPasajero
    viaje.provincia = provincia;
    viaje.ciudad= ciudadSalida;
    viaje.codigoPostal= codigoPostal;
    viaje.Iva=21;
    viaje.Subtotal = subTotal(viaje.precio);

    return viaje;
}

const pasaporte = datosPasaporte();

const recorridoPasaporte = () =>{
    for (const elemento in pasaporte) {
        salida3 += elemento+":"+" "+pasaporte[elemento]+"\n";
        
    }
    return salida3;
}


let total;
while(isNaN(total)){

    total = parseInt(prompt(`ingrese forma de pago para conocer el monto final del paquete contratado \n\n *(Inserte (1) si su pago es en Efectivo).\n *(Inserte (2) si su pago es en 3 o 6 pagos). \n *(inserte  (3) si su pago es en Ahora 12).`));
}

let salida3 ="";

let lista = recorridoPasaporte();

if(total === 1){
   
  alert("Usted debera a bonar la totalidad de"+" "+"$"+efectivo(pasaporte.precio)+" "+"contado efectivo, debito o credito en un pago.");
  alert("Felicitaciones su pago se ha adquirido con éxito. Muchas gracias por elegirnos, a continuacion le llegara su pasaporte!");
  alert("(PASAPORTE DEFILIPPI SPACETOUR)"+"\n\n"+lista + "\n")

}else if(total === 2){
    alert("Usted debera a bonar la totalidad de"+" "+"$"+cuotas(pasaporte.precio)+" "+"en 3 0 6 pagos.");
    alert("Felicitaciones su pago se ha adquirido con exito. Muchas gracias por elegirnos, a continuacion le llegara su pasaporte!");
    alert("(PASAPORTE DEFILIPPI SPACETOUR)"+"\n\n"+lista + "\n")

}else if(total === 3){
    alert("Usted debera a bonar la totalidad de"+" "+"$"+ahora12(pasaporte.precio)+" "+"en 12 cuotas.");
    alert("Felicitaciones su pago se ha adquirido con éxito. Muchas gracias por elegirnos, a continuacion le llegara su pasaporte!");
    alert("/PASAPORTE DEFILIPPI SPACETOUR)"+"\n\n"+lista + "\n")
}else{
    alert("Ingreso datos incorrectos,vuelva a repetir el proceso");
}



