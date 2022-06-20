let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let hc =document.getElementById("hc")
let spiel1 = document.getElementById("spiel1")
let spiel2 = document.getElementById("spiel2")
let spiel3 = document.getElementById("spiel3")
let spiel4 = document.getElementById("spiel4")


function calculateHc(){
   let gesamtHc =0;
  // let hcSpiel1 =0;
   if (spiel1.value < 200){
      hcSpiel1 = parseInt(spiel1.value) + parseInt(hc.value);
   }
   else{hcSpiel1 = parseInt(spiel1.value)}
   
   if (spiel2.value < 200){
      hcSpiel2 = parseInt(spiel2.value) + parseInt(hc.value);
   }
   else{hcSpiel2 = parseInt(spiel2.value)}
   
   if (spiel3.value < 200){
      hcSpiel3 = parseInt(spiel3.value) + parseInt(hc.value);
   }
   else{hcSpiel3 = parseInt(spiel3.value)}
   
   if (spiel4.value < 200){
      hcSpiel4 = parseInt(spiel4.value) + parseInt(hc.value);
   }
   else{hcSpiel4 = parseInt(spiel4.value)}
   gesamtHc= hcSpiel1 + hcSpiel2 + hcSpiel3 + hcSpiel4;
console.log(gesamtHc);
return gesamtHc;
}

function btnPress(){
   
   document.querySelector(".calculate").addEventListener("click",()=>{
      const gesamt =parseInt(spiel1.value)+parseInt(spiel2.value)+parseInt(spiel3.value)+parseInt(spiel4.value);
      let gesamtHc = calculateHc();
      
      
      let player ={
         "vorname" : firstName.value,
         "nachname": lastName.value,
         "hc": hc.value,
         "spiele":[spiel1.value,spiel2.value,spiel3.value,spiel4.value], 
         "gesamt": gesamt,
         "gesamtHc": gesamtHc,
         
      }
      console.log(player);
   })
   
}
btnPress();

