/*document.getElementById("nav_help").disabled = true;*/
/*const nav_inactive = document.getElementById('nav_help');*/
/*function myFunction(x) {
    x.classList.toggle("change");
  }*/
let arrowRight = document.querySelector(".ourfriends_circle_right");
let slides = document.querySelectorAll(".ourfriends_pets");
let slider = document.querySelector(".ourfriends_slider");
let i,slideDistance,count = 0;
let rndIndexOfSlide = 0;
const ourfriends_circle_right = document.querySelector('ourfriends_circle_right');
var ourfriendsSlidesArray = [0,1,2];
let restoreOurfriendsArray = [];
let imgPath = ['../../assets/images/pets-katrine.png','../../assets/images/pets-jennifer.png','../../assets/images/pets-woody.png', '../../assets/images/pets-freddie.png','../../assets/images/pets-scarlet.png','../../assets/images/pets-charly.png','../../assets/images/pets-timmy.png','../../assets/images/pets-sophia.png'];
let nameofOurfriends = ['Katrine','Jennifer','Woody','Freddie','Scarlet','Charly','Timmy','Sophia'];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
} 

function restoreSlides(numbersOfSlide) {
let div_ourfriends = document.createElement('div');
div_ourfriends.classList.add("ourfriends_pets");
div_ourfriends.innerHTML = "<img class='ourfriends_picture' src=" + imgPath[numbersOfSlide] + " alt='kitty_timmy'><p class='ourfriends_text'>" + nameofOurfriends[numbersOfSlide] + "</p><button type='button' class='ourfriends_button ourfriends_button_text'>Learn more</button>";
$( ".ourfriends_slider" ).append(div_ourfriends);
}


function clickSlider() {
  if (screen.width >=768 && screen.width < 1280) {
      slider.style.transform = 'translateX(-600px)';
      slider.style.transition = ' all 400ms linear'; 
  } else if (screen.width >=320 && screen.width < 768) {
    slider.style.transform = 'translateX(-300px)';
    slider.style.transition = ' all 400ms linear'; 
  } 
  else {
   for (i = 0; i < 3; i++) {   
    slider.style.transform = 'translateX(-200px)';
    slider.style.transition = ' all 400ms linear'; 
   }
  }

  setTimeout(function(){
    //удаляем все слайды
  for (i = 0; i < 8; i++) { 
    slides[i].remove();  
  }

  slider.style.transform = 'translateX(0px)';
   //восстанавливаем
  for (i = 0; i < 8; i++) {
    restoreSlides(i);  
  }

  //заполняем массив слайдов
  slides = document.querySelectorAll(".ourfriends_pets");  

  if (screen.width >=768 && screen.width < 1280) {
    for (i = 0; i < 8; i++) { 
      slideDistance = - (i - 2) * 310; 
      slides[i].style.left = slideDistance + 'px';  
    }
  } else if (screen.width >=320 && screen.width < 768) {
    for (i = 0; i < 8; i++) { 
      slideDistance = - (i - 1) * 273; 
      slides[i].style.left = slideDistance + 'px';  
    }
  } else if (screen.width >=320 && screen.width < 768) {

  }
  else {
   for (i = 0; i < 8; i++) { 
     slideDistance = - (i - 3) * 360; 
     slides[i].style.left = slideDistance + 'px';  
   }
  }

   for (i = 0; i < 3; i++) { 
     rndIndexOfSlide = getRandomInt(0, 8);
    if (ourfriendsSlidesArray.indexOf(rndIndexOfSlide) == -1) {
       ourfriendsSlidesArray[i] = rndIndexOfSlide;
     } else {
           while (ourfriendsSlidesArray.indexOf(rndIndexOfSlide) !== -1) {
            rndIndexOfSlide = getRandomInt(0, 8);
            }
          ourfriendsSlidesArray[i] = rndIndexOfSlide;
       }
   }
  },350); 
   


  setTimeout(function(){ 
    if (screen.width >=768 && screen.width < 1280) {
      for (i = 0; i < 2; i++) { 
        slideDistance = - 310 * (2 - i);
        slides[ourfriendsSlidesArray[i]].style.transform = 'translateX(' + slideDistance + 'px)';
        slides[ourfriendsSlidesArray[i]].style.transition = ' all 300ms linear'; 
      } 
    } else if (screen.width >=320 && screen.width < 768) {
      for (i = 0; i < 1; i++) { 
       /*slideDistance = - 292 * (1 - i);*/
        slideDistance = - 280 * (1 - i);
        slides[ourfriendsSlidesArray[i]].style.transform = 'translateX(' + slideDistance + 'px)';
        slides[ourfriendsSlidesArray[i]].style.transition = ' all 300ms linear'; 
      } 
    }
    else {
     for (i = 0; i < 3; i++) { 
      slideDistance = - 360 * (3 - i);
      slides[ourfriendsSlidesArray[i]].style.transform = 'translateX(' + slideDistance + 'px)';
      slides[ourfriendsSlidesArray[i]].style.transition = ' all 300ms linear'; 
     } 
    }
  },680); 

}



