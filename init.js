import esperarSegundos from "./async.js";

const main = (timeSeg) =>{
    if(typeof timeSeg !== 'number' || timeSeg <=0){
        console.error("Debes ingresar un número entero positivo.")
    }else{
        esperarSegundos(timeSeg)
    }
}  

main(2);
main(-5);
main(6);
main(0);