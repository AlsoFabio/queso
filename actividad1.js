const miArray=["Lucas","Matias","Jose","Pedro","Martina","Marcelo","Esteban","Marcela","Martin"];
console.log(`Cantidad de invitados: ${miArray.length}`)
console.log(`El ultimo invitado es ${miArray[miArray.length-1]}`)
miArray.splice(miArray.indexOf("Pedro"),1);
miArray.push("Pedro");
miArray.splice(miArray.indexOf("Marcela"),1);
console.log(miArray.sort())
console.log(miArray.map(e => {return `${e}. Orden: ${miArray.indexOf(e)+1} `}))
