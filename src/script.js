import daftcodeImgUrl from './assets/daftcode.png'
import 'bootstrap';
import 'jquery';
import 'popper.js';


window.addEventListener("scroll",function(){
  var menu = document.getElementsByClassName('page-navigation');

  if(window.pageYOffset > 150){
    console.log("powinno byc");
    menu[0].style.backgroundColor =  "rgba(255,255,255,0.98)";
  } else if (window.pageYOffset < 150){
    menu[0].style.backgroundColor =  "rgba(0,0,0,0)";
  }
},false);
/*
export default function() {
  const section = document.createElement('section')
  const img = document.createElement('img')
  img.src = daftcodeImgUrl
  section.appendChild(img)
  document.body.appendChild(section)
}
*/