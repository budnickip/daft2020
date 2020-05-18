import fetchData from './load-api';

const loadGroups = async () => {
    const productsList = await fetchData();
    var left = document.querySelector('.group-left');
    var rightproducts2 = document.querySelector('.group-right-products2');
    var rightproducts3 = document.querySelector('.group-right-products3');
    var rightproducts = document.querySelector('.group-right-products');
    if(productsList){
        left.innerHTML = '<img class="group-left__img" src="https://'+productsList[0].imageUrl+'" alt="sleeve">';
        rightproducts2.innerHTML = '<img class="group-right-products2__img" src="https://'+ productsList[1].imageUrl +'" alt="school">';
        rightproducts3.innerHTML = '<img class="group-right-products3__img" src="https://'+ productsList[2].imageUrl +'" alt="jewerly">';
        rightproducts.innerHTML = ' <img class="group-right-products__img" src="https://'+ productsList[3].imageUrl +'" alt="sunglasses">';
    } else{
        left.innerHTML = 'Błąd ładowania API, spróbuj później!';
        rightproducts2.innerHTML = 'Błąd ładowania API, spróbuj później!';
        rightproducts3.innerHTML = 'Błąd ładowania API, spróbuj później!';
        rightproducts.innerHTML = 'Błąd ładowania API, spróbuj później!';
    }
}

export default loadGroups;