// Якоря
const anchors = document.querySelectorAll('a[href*="#"]')


// Якоря
for (let anchor of anchors){
    anchor.addEventListener("click", function(event){
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector(''+ blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })

}





//slider

//первый скрипт на котором должно все держаться и синхронизировать

var div2 = document.getElementById('movepoint2');
var div = document.getElementById('movepoint');

var listener = function(e) {
  div.style.right = e.pageX  + "px";
  div2.style.right = e.pageX  + "px";
//qq=true


/*if(qq==true){
  div2.addEventListener('click',stop );
  function stop{
 
  }
}*/


};

function move() {
  document.addEventListener('click', listener);
}

function stop() {
  document.removeEventListener('click', listener);
}




//Второй скрип должыт быть под контролем первого
/*var div2 = document.getElementById('movepoint2');
var listener = function(e) {
  div2.style.right = e.pageX +14 + "px";
  
};

function move2() {
  document.addEventListener('mousemove', listener);
}

function stop2() {
  document.removeEventListener('mousemove', listener);
}*/




//Бургер меню


var burgercript = document.getElementById('clickonburger');
//burgercript.addEventListener('click', function() ); /*{clickhandle[counter = (counter % 2) + 1]();}*/



burgercript.addEventListener("mousemove", menuappear)



document.addEventListener('click',menuappearclose );









/*function clickhandle(){



 if(!event.target.matches()){
  menuappear()
 

}else if(clicks ==2) {
 
  menuappearclose()
}


}*/





function menuappear(){
  var menu = document.getElementById('menuu');
  menu.style.display="block"

}


function menuappearclose(){
    var menu = document.getElementById('menuu');
    menu.style.display="none"

  }

