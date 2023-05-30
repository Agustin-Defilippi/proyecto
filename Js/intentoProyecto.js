const viajes = [{destino:"salta",duracion:"5 dias",boleto:"ida y vuelta",hospedaje:"Andina Hotel",precio:82500,categoria:"oferta",zona:"norte"}
,{destino:"formosa",duracion:"5 dias",boleto:"ida y vuelta",hospedaje:"Solar del lago cabañas",precio:68900,categoria:"oferta",zona:"norte"}
,{destino:"misiones",duracion:"7 dias",boleto:"ida y vuelta",hospedaje:"El salto del tigre",precio:112700,categoria:"alta",zona:"norte"},
{destino:"san luis",duracion:"3 dias",boleto:"ida y vuelta",hospedaje:"La chaqueñita cabañas",precio:52000,categoria:"oferta",zona:"centro"},
{destino:"buenos aires",duracion:"3 dias",boleto:"ida y vuelta",hospedaje:"Hotel Monaco",precio:39500,categoria:"baja",zona:"centro"},
{destino:"san juan",duracion:"7 dias",boleto:"ida y vuelta",hospedaje:"Temu Hoteles",precio:131700,categoria:"alta",zona:"centro"},
{destino:"santa cruz",duracion:"4 dias",boleto:"ida y vuelta",hospedaje:"Cabañas el Arriero",precio:100000,categoria:"alta",zona:"sur"},
{destino:"cafayate",duracion:"5 dias",boleto:"ida y vuelta",hospedaje:"Suites la Ferrere",precio:185300,categoria:"oferta",zona:"sur"}];

const eleccionViaje = () =>{
    
    let paqueteViaje = prompt("ingrese que el destino donde usted quiere viajar dentro del pais"+"\n\n"+"*Norte"+"\n"+"*Centro"+"\n"+"*Sur").toLowerCase();

    const zonaViaje = viajes.filter(elementos => elementos.zona === paqueteViaje);
   /*  console.log(zonaViaje); */
    if(zonaViaje.length > 0){
        let salida1= "";

        zonaViaje.forEach(elemento =>{(salida1+=`Destino: ${elemento.destino}.\n Duracion: ${elemento.duracion}. \n Pasaje: ${elemento.boleto}. \n Hospedaje: ${elemento.hospedaje}. \n Precio :  $${elemento.precio}. \n Zona: ${elemento.zona}. \n\n`)});

        alert(`Paquetes de viaje disponibles en zona (${paqueteViaje}) del pais. \n\n ${salida1}`)

        let destinoZonaViaje = prompt(`Ingrese que paquete de viaje desea contratar, eligiendo acorde a la zona (${paqueteViaje}) que ingreso.`).toLocaleLowerCase();

        const destinoViajeFinal = zonaViaje.find(elemento => elemento.destino === destinoZonaViaje);

        /*  console.log(destinoViajeFinal); */
        
        let salida2="";

        for (const elemento in destinoViajeFinal) {
            salida2+= elemento+":"+" "+destinoViajeFinal[elemento]+`\n`;
        }

        alert(`Felicitaciones usted ha elegido con exito (${destinoZonaViaje}) como paquete de viaje!!! \n\n ${salida2}`);

        let resultado =  destinoViajeFinal;
        return resultado

    }else{
        alert("Ingreso datos incorrectos")
    }
    
}

const efectivo = (valor) =>{
    valor * 0.8
}


const vuelo = [];

const viaje = eleccionViaje();

vuelo.push(viaje)

console.log(viaje);
console.log(vuelo);

let total = prompt(`ingrese forma de pago para conocer el monto final del paquete contratado \n\n *Efectivo\n *3 o 6 pagos \n *Ahora 12`).toLocaleLowerCase();

if(total === "efectivo"){
   
  const total1 = vuelo.map(elemento => elemento.precio * 0.8);
  console.log(total1);
}





