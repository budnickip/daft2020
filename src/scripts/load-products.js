import fetchData from './load-api';

const loadProducts = async () => {
    const productsList = await fetchData();
    var productsOnSite = document.querySelector('.shop-basic');
    if (productsList) {
        var newProducts = '<div class="shop-list">';
        for (var i = 0; i < 8; i++) {
            if (i + 1 % 4 == 0)
                newProducts = newProducts + '<div class="shop-card"><img class="shop-card__img" src="https://' + productsList[i].imageUrl + '" alt="Card image cap"><div class="card-body"><p class="card-body__item">' + productsList[i].name + '</p><p class="card-body__item--price">' + productsList[i].price.current.text + '</p><p class="card-body__item--add">ADD TO CART</p><p class="card-body__item--icons"><img class="card-body__img" src="/assets/9ef4929d09df29ff3a001987ec297b1c.svg" alt="search"><img class="card-body__img" src="/assets/a2525626f2e8ee6fa6faa440a1d8ec0c.svg" alt="heart"></p></div></div></div><div class="shop-list">';
            else {
                newProducts = newProducts + '<div class="shop-card"><img class="shop-card__img" src="https://' + productsList[i].imageUrl + '" alt="Card image cap"><div class="card-body"><p class="card-body__item">' + productsList[i].name + '</p><p class="card-body__item--price">' + productsList[i].price.current.text + '</p><p class="card-body__item--add">ADD TO CART</p><p class="card-body__item--icons"><img class="card-body__img" src="/assets/9ef4929d09df29ff3a001987ec297b1c.svg" alt="search"><img class="card-body__img" src="/assets/a2525626f2e8ee6fa6faa440a1d8ec0c.svg" alt="heart"></p></div></div>';
            }
        }
        newProducts = newProducts + '</div>';
        productsOnSite.innerHTML = newProducts;

    } else {
        productsOnSite.innerHTML = "Błąd ładowania API, spróbuj później!";
    }

}

export default loadProducts;