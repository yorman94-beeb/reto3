let area = "";
while (area !== 'front-end' && area !== 'back-end') {
    area = prompt("¿Vas a seguir con el área de 'front-end' o 'back-end'? Escribe el nombre del área.");
}

let lenguaje = "";

if (area === 'back-end') {
    lenguaje = prompt("¿Quieres aprender Node.js o Python?");
} else if (area === 'front-end') {
    lenguaje = prompt("¿Quieres aprender React o Angular?");
}


    const areaElegidaOFullstack = prompt(`vas a especializarte en ${area} o vas a desarrollarte como programador full stack? escribe 1 para desarrollarte en area o 2 para ser full stack`);
    if(areaElegidaOFullstack==1){
        alert(`es genial que te especialices en ${area} es importante especializarse`)}

        else if (areaElegidaOFullstack==2){
            alert(`es bastante importante que te vuelvas desarrollador full stack y que no solo te quedes con ${area} esto te abrira aun mas oportunidades`)
        }

        else{
            alert("ingresa un valor valido");
        }

        let texto = prompt("¿Hay alguna otra tecnología que te gustaría aprender? pon 'ok' si asi es");
        while (texto==='ok'){
            let cualTecnologia = prompt("dime ¿cual?");
            alert (`¡ esta ${cualTecnologia} es demasiado interesante!`);
            texto = prompt(`¿ a parte de ${cualTecnologia} hay otra tecnologia que te gustaria aprender? `)
        }