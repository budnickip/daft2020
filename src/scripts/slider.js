import fetchData from './load-api'

const makeSlider = () => {
  new Glider(document.querySelector('.glider'), {
    slidesToShow: 1.5,
    slidesToScroll: 1,
    draggable: true,
    rewind: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 1,
          arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
          },
        }
      }
    ]
  });
}

const slider = async () => {

  const productsList = await fetchData();
  var sliderDiv = document.querySelector('.glider');

  if (productsList) {

    var newProducts = "";
    sliderDiv.innerHTML = newProducts;

    productsList.forEach((item) => {
      newProducts = newProducts + '<div class="glider-card"><div class="glider-description"><p class="glider-description__title">' + item.name + '</p><p class="glider-description__price">' + item.price.current.text + '</p></div><img class="glider-card__image" src="https://' + item.imageUrl + '" alt="glider img"></div>';

    });
    sliderDiv.innerHTML = newProducts;

  } else {
    sliderDiv.style = "color: red; font-size:40px;";
    sliderDiv.innerHTML = "Błąd ładowania API, spróbuj później!";
  }

  await makeSlider();

}
export default slider;