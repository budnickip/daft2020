const scrollingTop = () =>{
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var target = document.querySelector('.arrow-top');
    window.addEventListener("scroll",function(){
    if(window.pageYOffset >= vh*0.5){
    target.style.display = "block";
    }
    else if(window.pageYOffset < vh*0.5){
        target.style.display = "none";
    }
    },false); 


    target.addEventListener("click", function(){
    window.scrollTo({top: 0, left: 0});
    });
}
export default scrollingTop;