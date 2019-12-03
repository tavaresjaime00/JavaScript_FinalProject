// JS Document
// create vars to access header and section elements
let head = document.getElementById('#subheading');
let section = document.getElementById('#products');

// create another var to hold link to the JSON file
let requestURL = "";

// create a new XHR obj to store a new HTTP request (XMLHttpRequest)
let request = new XMLHttpRequest();

// open a new request, using the get method
request.open('GET', requestURL);

// set up a request to accept JSON file types
request.responseType = 'json';

// send the request using the send method
request.send();

// add an eventHandler that listens for onload of the JSON file/obj.
request.onload = function() {
    let jaysProducts = request.response;
    console.log(jaysProducts);
    populateSubheading(jaysProducts);
    topProducts(jaysProducts);
}

// set up the populateSubheading function to fill the subheading.
function populateSubheading(jsonObj) {
    let subheaderH2 = document.createElement('h1');
    subheaderH2.textContent = jsonObj['companyName'];
    head.appendChild(subheaderH2);

    let sub = document.createElement('p');
    sub.textContent = 'Company Address: ' + jsonObj['companyAddress'];
    head.appendChild(sub);
}

// define the topProducts function to display the products
function topProducts(jsonObj) {
    // bind top products to a variable
    topProducts = jsonObj['topProducts'];

    for (let i = 0; i < topProducts.length; i++) {
        // create all required elements to display the products semantically.
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        // grab the data associated with image to set the src and alt att's.
        image.setAttribute('src', 'images/' + topProducts[i].image);
        image.setAttribute('alt', topFlavours[i].image);
        // get the rest of the data
        h2.textContent = topProducts[i].productName;
        p1.textContent = 'Price: ' + topProducts[i].price;
        p2.textContent = 'Product Info: ' + topProducts[i].productInfo;
        p3.textContent = 'Link: ' + topProducts[i].link;
    }
    // append each element to the article, then append the article to the 'products' div section
    article.appendChild(h2);
    article.appendChild(image);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    section.appendChild(article);
}