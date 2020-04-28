const menuHide = () =>{

window.addEventListener("scroll",function(){
    var menu = document.getElementsByClassName('page-navigation');
  
    if(window.pageYOffset > 150){
      menu[0].style.backgroundColor =  "rgba(255,255,255,0.98)";
    } else if (window.pageYOffset < 150){
      menu[0].style.backgroundColor =  "rgba(0,0,0,0)";
    }
  },false);

}
export default menuHide;