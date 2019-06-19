window.cipher = {
encode : (offset,string)=> {
  let str = "";
string = string.toUpperCase();
for(let i =0; i <string.length;i++){ 
  let ascii = string[i].charCodeAt(); 
  if (ascii===32){
   //RESPETA EL ESPACIO CUANDO SE CIFRA
   str = str + " ";
} else {
let formula =((ascii - 65 + offset)% 26+ 65);
let letter = String.fromCharCode(formula);
str= str + letter;
}
}
return str;
},

decode : (offset,string)=> {
  let str = "";
  string = string.toUpperCase();
  for(let i =0; i <string.length;i++){ 
    let ascii = string[i].charCodeAt(); 
    if (ascii===32){
     //RESPETA EL ESPACIO CUANDO SE CIFRA
     str = str + " ";
  } else {
  let formula =((ascii + 65 - offset)% 26+ 65);
  let letter = String.fromCharCode(formula);
  str= str + letter;
  }
  }
  return str;
    
}
}
