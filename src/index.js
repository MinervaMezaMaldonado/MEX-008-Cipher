//BOTÓN CIFRAR
//AQUÍ ES DONDE SE DECLARÓ UNA FUNCIÓN PARA PASAR DE LA PÁGINA PRINCIPAL A OPCIÓN CIFRAR.
const iniciocifrado = () => { 

    //AQUI QUIERO LIMPIAR EL TEXTO DE MIS CAJAS DEL MENSAJE Y OFFSET
   //document.getElementById("mensajeacifrar").value=" ";
 //document.getElementById("clave").value= " ";


 //AQUI TENGO LA FUNCIÓN DEL BOTÓN CIFRAR 
    let aparecercifrar = document.getElementById("cifrarinicio");
    let paginainicio = document.getElementById("pagina1");
    paginainicio.style.display= "none";
    aparecercifrar.style.display = "block";
   // return aparecercifrar;
    }
    //AQUÍ SE LLAMA A LA FUNCIÓN QUE SE DECLARO ARRIBA Y SE LE OTORGA EL EVENTO AL BOTÓN PARA QUE SE EJECUTE EL CAMBIO DE PÁGINA.
    //SE LLAMA AL BOTÓN CIFRAR
    const mostrarcifrar= document.getElementById("cifrar");
    mostrarcifrar.addEventListener("click",iniciocifrado);
    
    
    
    
    //BOTÓN "CIFRALO" MUESTRA LA ÚLTIMA PÁGINA DE CIFRAR.

    //^^^^^^Queda pendiente GUARDA Y MUESTRA EL MENSAJE YA CIFRADO.
    
    const botoncifralo = () => {
   
        let mostrarmensajecifrado = document.getElementById("cifradofin");
    let paginacifrarinicio = document.getElementById("cifrarinicio");

let mensajefinal= document.getElementById("mensajecifrado");
let offset= parseInt(document.getElementById("clave").value);
let string= document.getElementById("mensajeacifrar").value;
// CONVERTIR A NUMERO EL OFFSET

    paginacifrarinicio.style.display = "none";
    mostrarmensajecifrado.style.display = "block";
    let resultadocifrar= window.cipher.encode(offset,string);
    mensajefinal.innerHTML=resultadocifrar;
// return resultadocifrar;
    }
     //AQUÍ SE LLAMA A LA FUNCIÓN QUE SE DECLARO ARRIBA Y SE LE OTORGA EL EVENTO AL BOTÓN PARA QUE SE EJECUTE EL CAMBIO DE PÁGINA.
    //SE LLAMA AL BOTÓN CIFRALO 
    const finalcifrar = document.getElementById("cifralo");
    finalcifrar.addEventListener("click",botoncifralo);

 
    //PRIMER BOTÓN QUE REGRESA A LA PÁGINA PRINCIPAL
    const regresoalmenu = () => {
        let paginadecifradoinicial = document.getElementById("cifrarinicio");
        let paginadelmenu = document.getElementById ("pagina1");
        paginadecifradoinicial.style.display = "none";
        paginadelmenu.style.display = "block";
        //return paginadelmenu;
    }
     const regresamealmenu = document.getElementById("paginaprincipal");
     regresamealmenu.addEventListener("click",regresoalmenu);



    //BOTÓN "QUIEROCIFRAROTRO" REGRESAR A LA PÁGINA ANTERIOR PARA CIFRAR OTRO MENSAJE
    const regresoacifrar = () => {
        let paginaregresocifrarinicio = document.getElementById("cifrarinicio");
        let paginamostrarmensajecifrado = document.getElementById("cifradofin");
        paginamostrarmensajecifrado.style.display = "none";
        paginaregresocifrarinicio.style.display = "block";
       // return paginaregresocifrarinicio;
    }   
    //AQUÍ SE LLAMA LA FUNCIÓN PARA QUE EL BOTÓN EJECUTE EL RETORNO DE PÁGINA
    //SE LLAMA AL BOTÓN QUIEROCIFRAR
    const regresar = document.getElementById("Quierocifrar");
    regresar.addEventListener("click", regresoacifrar);




    //BOTÓN REGRESO A LA PÁGINA PRINCIPAL
    const regresarmenu = () => { 
        let regresopagina1 = document.getElementById("pagina1");
        let paginafinalcifrar = document.getElementById ("cifradofin");
        paginafinalcifrar.style.display = "none";
        regresopagina1.style.display = "block";
        //return regresopagina1;
    }
    const menuprincipal = document.getElementById("paginadeinicio");
    menuprincipal.addEventListener("click", regresarmenu);



  //BOTÓN DESCIFRADO
    
    //AQUÍ ES DONDE SE DECLARÓ UNA FUNCIÓN PARA PASAR DE LA PÁGINA PRINCIPAL A OPCIÓN DESCIFRAR.
    
    const iniciodescifrado = () => {
        let aparecerdescifrar= document.getElementById("descifradoinicio");
        let paginainicio= document.getElementById("pagina1");
        paginainicio.style.display="none";
        aparecerdescifrar.style.display="block";
        //return aparecerdescifrar;
        }
    //AQUÍ SE LLAMA A LA FUNCIÓN QUE SE DECLARO ARRIBA Y SE LE OTORGA EL EVENTO AL BOTÓN PARA QUE SE EJECUTE EL CAMBIO DE PÁGINA.
        const mostrardescifrar = document.getElementById("descifrar");
        mostrardescifrar.addEventListener("click", iniciodescifrado);
        




    
   //BOTÓN PARA DESCIFRAR AL INTRODUCIR EL TEXTO DESEADO
   const quierodescifrarlo = () => {
       let paginainiciodescifrar = document.getElementById("descifradoinicio");
       let paginafindescifrado = document.getElementById("descifradofin");

       let descifradofinal= document.getElementById("mensajedescifrado");
       let offset= parseInt(document.getElementById("clavenumerica").value);
       let string= document.getElementById("mensajedescifrar").value;
       paginainiciodescifrar.style.display = "none";
       paginafindescifrado.style.display ="block";

      let resultadodescifrar=window.cipher.decode(offset,string);
      descifradofinal.innerHTML=resultadodescifrar;
       //return paginafindescifrado;
   }
   const vamosadescifrar = document.getElementById("quierodescifrar");
   vamosadescifrar.addEventListener("click", quierodescifrarlo);






   //PRIMER BOTÓN IR A LA PÁGINA PRINCIPAL
   const vamosalasopciones= () => {
       let paginaprincipalmenu = document.getElementById("pagina1");
       let paginainiciodescifrado = document.getElementById("descifradoinicio");
       paginainiciodescifrado.style.display ="none";
       paginaprincipalmenu.style.display = "block";
       //return  paginaprincipalmenu;
}
   const principal = document.getElementById ("regreso");
   principal.addEventListener("click", vamosalasopciones);



   //BOTÓN PARA DESCIFRAR OTRO MENSAJE 
   const quierodescifrarotro = () => {
       let ultimapaginadescifrado = document.getElementById("descifradofin");
       let primerapaginadescifrar = document.getElementById("descifradoinicio");
       ultimapaginadescifrado.style.display = "none";
       primerapaginadescifrar.style.display = "block";
       //return primerapaginadescifrar;
   }
   const vamosadescifrarnuevamente = document.getElementById("descifrarotro");
   vamosadescifrarnuevamente.addEventListener("click", quierodescifrarotro);
    

   //BOTÓN QUIERO REGRESAR A LA PÁGINA PRINCIPAL
    const paginainicial = () => {
        let paginafin = document.getElementById("descifradofin");
        let paginaunicainicio = document.getElementById("pagina1");
        paginafin.style.display = "none";
        paginaunicainicio.style.display ="block";
        //return paginaunicainicio;
    }
    const paginaprincipio = document.getElementById("menu");
    paginaprincipio.addEventListener("click", paginainicial);



