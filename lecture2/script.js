//Задание 1
function comparison (a, b) {
    return a > b;
}




//Задание 2
function enteredString (string) {
    return "Вы ввели *" + string + "*";
} 




//Задание 3
function comparison (a){
    if (a === null || a === undefined){
        console.log("является");
    } else {
        console.log("не является");
    }
}




//Задание 4
function addProperty (object){
    object.checked = true;
}




//Задание 5
function numbers (a) {
   
    for (i = a; i > 0; i--){
        console.log(i);    
    }
   
    for (i = 0; i <= a; i++){
        console.log(i);
    }    

}