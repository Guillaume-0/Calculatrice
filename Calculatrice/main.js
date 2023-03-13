function nettoyage(){
    console.log("coucou");
    document.getElementById("affichage").innerHTML = " ";   
}

var error_ = false;
var tab = ["+","-","÷","×","(",")", ","];

function affichage(value){
    console.log('caca')
    texte = document.getElementById("affichage").textContent;
    if(value != 'C' && value != '='){
        document.getElementById("affichage").innerHTML = texte + value;
    }
    if(texte[texte.length-1]==value)error_ = true   
        console.log('caca');
        if(value == '+' || value == '-' || value == '÷' || value == '×' || value == '(' || value == ')' || value == ','){
             var op = texte[texte.length-1]
             console.log(op);
        //if(texte[texte.length-1]==value)error_ = true
        //    if(texte[texte.length]== plus || texte[texte.length]== moins || texte[texte.length]== divise || texte[texte.length]== multiplie || texte[texte.length]== parenthese || texte[texte.length]== parenthese2 || texte[texte.length]== virgule) {
        //     if(texte[texte.length-1]== plus || texte[texte.length-1]== moins || texte[texte.length-1]== divise || texte[texte.length-1]== multiplie || texte[texte.length-1]== parenthese || texte[texte.length-1]== parenthese2 || texte[texte.length-1]== virgule)error_ = true
        //    }
            
            console.log(tab)
            console.log(tab.includes(op))
            
            if(tab.includes(op)) error_ = true; 
        

    }
        
            
        
    
   
   
}


function erreur(value){
    
}

function resultat(){
   // document.getElementById("affichage").innerHTML = 
    if(error_==true) {
         document.getElementById("affichage").innerHTML = "Erreur"
         error_=false;
    }
    else{
        document.getElementById("affichage").innerHTML = operation()
    }
}
function operation(){
    texte = document.getElementById("affichage").textContent;
    console.log(texte);
    result = eval(texte);
    console.log(result);
    return result;
}