
const fetchData = async () => {
    var productsArray = [];
    var products = await fetch("https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4209&limit=12&store=US", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "asos2.p.rapidapi.com",
            "x-rapidapi-key": "58ee1274e6msh9fccf40d30bf07cp17e0d4jsndbf4c053a16f"
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                return Promise.reject(response)
            }
        })
        .then(response => response.products)

        .catch(error => {
            console.log("Błąd API! ")
            products = false;
        }
        );

    return products;
}

export default fetchData;