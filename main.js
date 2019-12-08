// JS Document
// create vars to access header and section elements
let head = document.querySelector('header');
let section1 = document.getElementById('pr1');
let section2 = document.getElementById('pr2');
let section3 = document.getElementById('pr3');
let section4 = document.getElementById('pr4');
let section5 = document.getElementById('pr5');

// create another var to hold link to the JSON file
//let requestURL = "https://tavaresjaime00.github.io/JavaScript_FinalProject/products.json";
let requestURL = "products.json"
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
    let subheaderH2 = document.createElement('h2');
    subheaderH2.setAttribute('class', 'header')
    subheaderH2.textContent = jsonObj['companyName'];
    head.appendChild(subheaderH2);
    let sub = document.createElement('p');
    sub.setAttribute('class', 'compInfo');
    sub.textContent = 'Company Address: ' + jsonObj['companyAddress'];
    head.appendChild(sub);
}

// define the topProducts function to display the products
function topProducts(jsonObj) {
    // bind top products to a variable
    topProducts = jsonObj['topProducts'];
    // loop through all products in the JSON file.
    for (let i = 0; i < topProducts.length; i++) {
        // create all required elements to display the products semantically.
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        let image = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let link = document.createElement('a');
        let ul = document.createElement('ul');
        ul.setAttribute('class', 'list-group');
        // grab the data associated with image to set the src and alt att's.
        image.setAttribute('src', 'images/' + topProducts[i].image);
        image.setAttribute('alt', topProducts[i].image);
        // get the rest of the data
        h3.textContent = topProducts[i].productName;
        p1.textContent = '$' + topProducts[i].price;
        p2.textContent = topProducts[i].productInfo;
        link.setAttribute('href', topProducts[i].link);
        link.textContent = 'Buy This Product';
        // loop through the list of features and display in a ul-li list for each product 
        let features = topProducts[i].features;
        for(let j = 0; j < features.length; j++ ) {
            let li = document.createElement('li'); 
            li.textContent = features[j];
            li.setAttribute('class', 'list-group-item');
            ul.appendChild(li); 
        }
        // append all children to their designated parents to create each individual product section, plus the company header and title.
        article.appendChild(h3);
        article.appendChild(image);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(ul);
        article.appendChild(link);
        // determine which section to put each product in (for easier css styling later).
        if (i == 0) {
            section1.appendChild(article);
        }else if (i == 1) {
            section2.appendChild(article);
        }else if (i == 2) {
            section3.appendChild(article);
        }else if (i == 3) {
            section4.appendChild(article);
        }else if (i == 4) {
            section5.appendChild(article);
        }
    }
}
