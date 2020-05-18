import fetchData from './load-api'


const loadData = async () => {
    var buttonAllProducts = document.querySelector(".all-products__button");
    var buttonDiv = document.querySelector('.all-products');

    const productsList = await fetchData();

    buttonAllProducts.addEventListener("click", function () {
        buttonDiv.style.display = "none";
        var shop = document.querySelector('.shop-all');
        var shopOld = shop.innerHTML;
        if (productsList) {
            var newProducts = '<div class="shop-list">';
            productsList.forEach((item, index) => {
                if (index + 1 % 4 == 0)
                    newProducts = newProducts + '<div class="shop-card"><img class="shop-card__img" src="https://' + item.imageUrl + '" alt="Card image cap"><div class="card-body"><p class="card-body__item">' + item.name + '</p><p class="card-body__item--price">' + item.price.current.text + '</p><p class="card-body__item--add">ADD TO CART</p><p class="card-body__item--icons"><img class="card-body__img" src="/assets/9ef4929d09df29ff3a001987ec297b1c.svg" alt="search"><img class="card-body__img" src="/assets/a2525626f2e8ee6fa6faa440a1d8ec0c.svg" alt="heart"></p></div></div></div><div class="shop-list">';
                else {
                    newProducts = newProducts + '<div class="shop-card"><img class="shop-card__img" src="https://' + item.imageUrl + '" alt="Card image cap"><div class="card-body"><p class="card-body__item">' + item.name + '</p><p class="card-body__item--price">' + item.price.current.text + '</p><p class="card-body__item--add">ADD TO CART</p><p class="card-body__item--icons"><img class="card-body__img" src="/assets/9ef4929d09df29ff3a001987ec297b1c.svg" alt="search"><img class="card-body__img" src="/assets/a2525626f2e8ee6fa6faa440a1d8ec0c.svg" alt="heart"></p></div></div>';
                }
            });
            newProducts = newProducts + '</div>';
            shop.innerHTML = shopOld + newProducts;
        } else {
            shop.innerHTML = "Błąd ładowania API, spróbuj później!";
        }

    });
}
export default loadData;