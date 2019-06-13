//BOTÓN CIFRAR

//AQUÍ ES DONDE SE DECLARÓ UNA FUNCIÓN PARA PASAR DE LA PÁGINA PRINCIPAL A OPCIÓN CIFRAR.


const iniciocifrado = () => { 
    let aparecercifrar = document.getElementById("cifrarinicio");
    let paginainicio = document.getElementById("pagina1");
    paginainicio.style.display= "none";
    aparecercifrar.style.display = "block";
    return aparecercifrar;
    }
    //AQUÍ SE LLAMA A LA FUNCIÓN QUE SE DECLARO ARRIBA Y SE LE OTORGA EL EVENTO AL BOTÓN PARA QUE SE EJECUTE EL CAMBIO DE PÁGINA.
    //SE LLAMA AL BOTÓN CIFRAR
    const mostrarcifrar= document.getElementById("cifrar");
    mostrarcifrar.addEventListener("click",iniciocifrado);
    
    
    
    
    //BOTÓN "CIFRALO" MUESTRA LA ÚLTIMA PÁGINA DE CIFRAR.
    //Queda pendiente GUARDA Y MUESTRA EL MENSAJE YA CIFRADO.
    
    const botoncifralo = () => {
    let mostrarmensajecifrado = document.getElementById("cifradofin");
    let paginacifrarinicio = document.getElementById("cifrarinicio");
    paginacifrarinicio.style.display = "none";
    mostrarmensajecifrado.style.display = "block";
    return mostrarmensajecifrado;
    }
     //AQUÍ SE LLAMA A LA FUNCIÓN QUE SE DECLARO ARRIBA Y SE LE OTORGA EL EVENTO AL BOTÓN PARA QUE SE EJECUTE EL CAMBIO DE PÁGINA.
    //SE LLAMA AL BOTÓN CIFRALO 
    const finalcifrar = document.getElementById("cifralo");
    finalcifrar.addEventListener("click",botoncifralo);
    
    
    
    
    //BOTÓN "" REGRESAR A LA PÁGINA ANTERIOR PARA CIFRAR OTRO MENSAJE
    const regresaracifrar = () => {
    let mostrarpaginacifrado = document.getElementById("cifradoinicio");
    let finaldelcifrar = document.getElementById("cifradofin");
    mostrarpaginacifrado.style.display = "block";
    finaldelcifrar.style.display = "none";
    return mostrarpaginacifrado;
    }
    //AQUÍ SE LLAMA LA FUNCIÓN PARA QUE EL BOTÓN EJECUTE EL RETORNO DE PÁGINA
    //SE LLAMA AL BOTÓN 
    
    
    
    //BOTÓN DESCIFRADO
    
    //AQUÍ ES DONDE SE DECLARÓ UNA FUNCIÓN PARA PASAR DE LA PÁGINA PRINCIPAL A OPCIÓN DESCIFRAR.
    
    const iniciodescifrado = () => {
        let aparecerdescifrar= document.getElementById("descifradoinicio");
        let paginainicio= document.getElementById("pagina1");
        paginainicio.style.display="none";
        aparecerdescifrar.style.display="block";
        return aparecerdescifrar;
        }
    //AQUÍ SE LLAMA A LA FUNCIÓN QUE SE DECLARO ARRIBA Y SE LE OTORGA EL EVENTO AL BOTÓN PARA QUE SE EJECUTE EL CAMBIO DE PÁGINA.
        const mostrardescifrar = document.getElementById("descifrar");
        mostrardescifrar.addEventListener("click", iniciodescifrado);
        
    
        
    