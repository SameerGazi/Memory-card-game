var cards=document.querySelectorAll(".card")
console.log(cards);

cards.forEach((card) => card.addEventListener("click" , flip));
var isFlipped=false;
var firstCard;
var secondCard;

function flip(){
    //console.log("card flipped");
    //console.log(this); thisis holding that particular card
    this.classList.add("flip");  //classlist is used to add a class & flip is defined in css
if(!isFlipped){
    isFlipped=true;
    firstCard=this
}
else{
    secondCard=this;
    console.log(firstCard);
    console.log(secondCard);
    checkIt();
}
}
    
function checkIt(){
   // console.log("checking...");
   if(firstCard.dataset.image === secondCard.dataset.image){
       success();
 }
 else{
     fail();
     
 }
}
function success(){
    //console.log("success");
    firstCard.removeEventListener('click' , flip)
    secondCard.removeEventListener("click" , flip)
    
}
function fail(){
    //console.log("fail");
    setTimeout(()=>{
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    reset();
},1000) 
}
function reset(){
    isFlipped=false;
    firstCard=null;
    secondCard=null;
   }

  (function shuffle(){
       cards.forEach((card)=>{
           var index=Math.floor(Math.random() * 16)  //random place elements between 0 and 15. by default betwen 0 and 1 , when multily by 16 give 0,15
           card.style.order = index; //order is a flexbox property
       })
   })();
