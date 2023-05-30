const ingresoDatosPasaporte = () =>{


    alert("Completa los siguientes campos de informacion para ir generando su pasaporte");

    
    let nombrePasajero= prompt("Ingrese su nombre");
    let apellidoPasajero= prompt("Ingrese su apellido");
    let fecha = prompt("ingrese la fecha actual, por ej 12/10/2023");
    let provincia = prompt("ingrese provincia donde reside");
    let ciudadSalida= prompt("Ingrese ciudad donde reside");
    let codigoPostal= parseInt(prompt("ingrese codigo postal acorde a lo ingresado en los campos anteriores"));

    return nombrePasajero + apellidoPasajero + fecha + provincia + ciudadSalida + codigoPostal;

   
    
}