function greet() { 
    alert("Welcome to the dynamic world")
   }
function change_color(){
    document.body.style.backgroundColor ="blue";

}
let number = 0;
function change_text(){
    if (number=== 0){
        document.getElementById('text').innerText ='testing inline JS'
        number =1

    }
    else{
        document.getElementById ('text').innerText ="This is the first HTML,CSS and Javascript"
        number = 0
        
    }
}