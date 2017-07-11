var choice = document.querySelectorAll("button");
var utilisateur = prompt("Enter Your Name");



document.querySelector(".utilisateur").innerHTML = utilisateur;

for (let i = 0; i < choice.length; i++){
 choice[i].addEventListener("click", function() {
   var gamer = choice[i].className;
   var boutonCompu = choice[Math.floor(Math.random() * choice.length)];
   var resultat;
var computer =  boutonCompu.firstElementChild.alt;
var image =  boutonCompu.innerHTML;



        var resultgamer=0;
         var resultcompu=0;

      if (gamer === computer){
          
           resultat = "Equality ! But I will win";
       }
         else if (gamer === "scissors"){
          if (computer === "pebbles"){
         resultcompu++; resultat = "I'm the winner. You are a loser ! I do not like the losers! Get out!";
          }
           else {
         resultgamer++; resultat = "Kenny it's the winner";
           }
         }

        else if (gamer === "leaf"){
          if (computer === "pebbles"){
          resultgamer++; resultat = "Kenny it's the winner";
          }
           else {
          resultcompu++; resultat = "I'm the winner. You are a loser ! I do not like the losers! Get out!";
           }
         }

        else if (gamer === "pebbles"){
          if (computer === "scissors"){
          resultgamer++; resultat = "Kenny it's the winner";
          }
           else {
          resultcompu++;  resultat = "I'm the winner. You are a loser ! I do not like the losers! Get out!";
           }

}

      document.querySelector(".resultat").innerHTML = `
        ${utilisateur} : ${gamer}</br>
        computer choice: ${image}</br>
        ${resultat}
        `;
      })
     }



