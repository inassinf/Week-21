

//Signo zodiacal

function zodiac(day, month){

    let horoscopo;
    if ((day>=21&& month==3)||(day<=19&& month==4)) {
        horoscopo = "Aries";
    }else if ((day>=20&& month==4)||(day<=20&& month==5)) {
        horoscopo = "Tauro";
        
    } else if ((day>=21&& month==5)||(day<=20&& month==6)) {
        horoscopo = "Geminis";
        
    } else if ((day>=21&& month==6)||(day<=22&& month==7)) {
        horoscopo = "Cancer";
        
    }else if ((day>=23&& month==7)||(day<=22&& month==8)) {
        horoscopo = "Leo";
        
    } else if ((day>=23&& month==8)||(day<=22&& month==9)) {
        horoscopo = "Virgo";
        
    } else if ((day>=23&& month==9)||(day<=22&& month==10)) {
        horoscopo = "Libra";
        
    } else if ((day>=23&& month==10)||(day<=21&& month==11)) {
        horoscopo = "Escorpio";
        
    } else if ((day>=22&& month==11)||(day<=21&& month==12)) {
        horoscopo = "Sagitario";
        
    } else if ((day>=22&& month==12)||(day<=19&& month==1)) {
        horoscopo = "Capricornio";
        
    } else if ((day>=20&& month==1)||(day<=18&& month==2)) {
        horoscopo = "Acuario";
        
    }else {horoscopo = "Piscis"}

    return horoscopo;
}

console.log("El horoscopo es: " + zodiac(16,2));

// Procedimiento para continentes

function continent(country){

    let continente;
    if((country== "Mexico")||(country== "Argentina")||(country== "Canada")||(country== "EEUU")||(country== "Honduras")){
        continente = "America"
  
    } else if((country== "China")||(country== "Japon")||(country== "Libano")||(country== "Mongolia")||(country== "Palestina")){
       continente = "Asia"
  
    } else if((country== "Marruecos")||(country== "Somalia")||(country== "Egipto")||(country== "Nigeria")||(country== "Sudafrica")){
     
        continente = "Africa"
  
    } else if((country== "Espania")||(country== "Italia")||(country== "Noruega")||(country== "Polonia")||(country== "Irlanda")){
     
        continente = "Europa"
  
    } else if((country== "Australia ")||(country== "Nueva Zelanda")||(country== "Polinesia")||(country== "Micronesia")||(country== "Nueva Guinea")){
     
        continente = "Oceania"
    }

    return continente;
}

console.log(continent("Nueva Zelanda"));
console.log(continent("Egipto"));
console.log(continent("Mexico"));


//Funcion par

function isEven(number){
    if(number%2== 0){
        console.log(number + " es par");
    } else{
        console.log(number + " es impar");
    }
}

isEven(144);
isEven(153);
isEven(1);



