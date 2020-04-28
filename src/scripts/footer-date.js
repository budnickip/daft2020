const footerDate = () =>{
    var year = new Date();
    document.getElementById("copyright").innerHTML = "&copy;" + year.getFullYear() + " Zoom All rights reserved";
}
export default footerDate;