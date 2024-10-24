function solicita_edad(){
    var edad = window.prompt("Eres(o no) mayor de edad?")
    
    if(edad >= 18){
        console.log("Eres mayor de edad")
    }else{
        console.log("Eres menor de edad")
    }
    
}