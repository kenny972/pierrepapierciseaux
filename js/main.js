var choice = document.querySelectorAll("button");
var utilisateur = prompt("Enter Your Name");



document.querySelector(".utilisateur").innerHTML = utilisateur;

for (let i = 0; i < choice.length; i++){
 choice[i].addEventListener("click", function() {
   var gamer = choice[i].className;
   var boutonOrdinateur = choice[Math.floor(Math.random() * choice.length)];
   var resultat;
var ordinateur =  boutonOrdinateur.firstElementChild.alt;
var image =  boutonOrdinateur.innerHTML;



        var resultatjoueur=0;
         var resultatordi=0;

      if (gamer === ordinateur){
           resultat = "Equality ! But I will win";
       }
         else if (gamer === "scissors"){
          if (ordinateur === "pebbles"){
         resultatordi++; resultat = "I'm the winner. You are a loser ! I do not like the losers! Get out!";
          }
           else {
         resultatjoueur++; resultat = "Kenny it's the winner";
           }
         }

        else if (gamer === "leaf"){
          if (ordinateur === "pebbles"){
          resultatjoueur++; resultat = "Kenny it's the winner";
          }
           else {
          resultatordi++; resultat = "I'm the winner. You are a loser ! I do not like the losers! Get out!";
           }
         }

        else if (gamer === "pebbles"){
          if (ordinateur === "scissors"){
          resultatjoueur++; resultat = "Kenny it's the winner";
          }
           else {
          resultatordi++;  resultat = "I'm the winner. You are a loser ! I do not like the losers! Get out!";
           }

}

      document.querySelector(".resultat").innerHTML = `
        ${utilisateur} : ${gamer}</br>
        computer choice: ${image}</br>
        ${resultat}
        `;
      })
     }