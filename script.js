const ContinueBTN=document.getElementById("Continue");
const Body= document.querySelector("body");
const YesBTN = document.getElementById("Yes");
const NoBTN = document.getElementById("No");
const img = document.querySelector(".CTable");
const h1txt=document.getElementById("WelcomeText");
const h2txt=document.getElementById("Instructions");
const bg="bg=transparent";
const Output= document.querySelector(".Output");
const apiKey="mcapi_6637839562af6e51d822723acf215a438c0efc5235468d459df986b710fac392";
fetch("https://api.minecraftitems.xyz/api/item/diamond_sword/size=4/left?mcapi_6637839562af6e51d822723acf215a438c0efc5235468d459df986b710fac392")
  .then(function(response) {
    return response;
  })
  .then(function(data) {
    console.log(data);
    Output.src=data.url;
  });
ContinueBTN.addEventListener("click", function() {
  YesBTN.style.display="block";
  NoBTN.style.display="block";
  ContinueBTN.style.display="none";
});
YesBTN.addEventListener("click", function() {
  YesBTN.style.display="none";
  NoBTN.style.display="none";
  Body.style.background="lightgray";
  img.style.display="block";
h1txt.style.display="none";
h2txt.style.display="none";
});