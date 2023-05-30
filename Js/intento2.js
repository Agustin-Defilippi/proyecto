const eleccionViaje = () =>{
        
    let paqueteViaje = prompt("ingrese que el destino donde usted quiere viajar dentro del pais"+"\n\n"+"1)Norte"+"\n"+"2)Centro"+"\n"+"3)Sur").toLowerCase();

    const zonaViaje = viajes.filter(elementos => elementos.zona === paqueteViaje);
    console.log(zonaViaje);

    let salida1= "";

    zonaViaje.forEach(elemento =>{alert(salida1+=`Destino: ${elemento.destino}\n Duracion: ${elemento.duracion} \n Pasaje: ${elemento.boleto} \n Hospedaje: ${elemento.hospedaje} \n Precio: ${elemento.precio} \n Zona: ${elemento.zona} \n\n`)});

    let destinoZonaViaje = prompt(`Ingrese que paquete de viaje desea contratar, eligiendo acorde a la zona (${paqueteViaje}) que ingreso.`).toLocaleLowerCase();

    const destinoViajeFinal = zonaViaje.find(elemento => elemento.destino === destinoZonaViaje);

    console.log(destinoViajeFinal);
    alert(`Felicitaciones usted ha adquirido con exito (${destinoZonaViaje}) como paquete de viaje!!!`);
    let salida2="";

    for (const elemento in destinoViajeFinal) {
        salida2+= elemento+":"+" "+destinoViajeFinal[elemento]+`\n`
    }
    
    alert(salida2)

    let resultado = salida1 + salida2
    return resultado
}
