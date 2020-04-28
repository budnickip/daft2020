const loadData = () => {
    var buttonAllProducts = document.querySelector(".all-products__button");
    var buttonDiv = document.querySelector('.all-products');


    const moreProducts = [
    {
        image: "https://via.placeholder.com/309x390.png/",
        text: "Title1",
        price: "$price$$$1"
    },
    {
        image: "https://via.placeholder.com/309x390.png/",
        text: "Title2",
        price: "$price$$$2"
    },
    {
        image: "https://via.placeholder.com/309x390.png/",
        text: "Title3",
        price: "$price$$$3"
    },
    {
        image: "https://via.placeholder.com/309x390.png/",
        text: "Title4",
        price: "$price$$$4"
    },
    {
        image: "https://via.placeholder.com/309x390.png/",
        text: "Title5",
        price: "$price$$$5"
    },
    {
        image: "https://via.placeholder.com/309x390.png/",
        text: "Title6",
        price: "$price$$$6"
    },
    ];

    buttonAllProducts.addEventListener("click", function(){
    buttonDiv.style.display = "none";
    var shop = document.querySelector('.shop-all');
    var shopOld = shop.innerHTML;
    var newProducts = '<div class="shop-list">';
    var i = 1;
    moreProducts.forEach(item => {
        if(i%4 == 0)
        newProducts = newProducts + '<div class="shop-card"><img class="shop-card__img" src="' + item.image + '"alt="Card image cap"><div class="card-body"><p class="card-body__item">' + item.text  + '</p><p class="card-body__item--price">' + item.price + '</p><p class="card-body__item--add">ADD TO CART</p><p class="card-body__item--icons"><img class="card-body__img" src="/assets/9ef4929d09df29ff3a001987ec297b1c.svg" alt="search"><img class="card-body__img" src="/assets/a2525626f2e8ee6fa6faa440a1d8ec0c.svg" alt="heart"></p></div></div></div><div class="shop-list">';
        else{
        newProducts = newProducts + '<div class="shop-card"><img class="shop-card__img" src="' + item.image + '"alt="Card image cap"><div class="card-body"><p class="card-body__item">' + item.text  + '</p><p class="card-body__item--price">' + item.price + '</p><p class="card-body__item--add">ADD TO CART</p><p class="card-body__item--icons"><img class="card-body__img" src="/assets/9ef4929d09df29ff3a001987ec297b1c.svg" alt="search"><img class="card-body__img" src="/assets/a2525626f2e8ee6fa6faa440a1d8ec0c.svg" alt="heart"></p></div></div>';
        }
        i++;
    });
    newProducts = newProducts + '</div>';
    shop.innerHTML = shopOld + newProducts;
    });
}
export default loadData;