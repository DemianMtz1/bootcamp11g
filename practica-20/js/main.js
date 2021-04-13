/*
{
    name:"...And Justice for All",
    band:"Metallica",
    gender:"Metal"
}
*/

const getProductData = () => {
    let productObject = {}
    let fields = document.querySelectorAll("form input[type='text']")
  
    //console.log( fields )
  
    fields.forEach(field => {
      console.log(field.name)
      productObject[field.name] = field.value
      console.log(productObject)
    })
  
    let select = document.getElementById("category")
    let category = select.options[select.selectedIndex].value
  
    //console.log( gender )
  
    productObject = { ...productObject, category }
    console.log(productObject)
    saveProduct(productObject)
  
    fields.forEach(field => {
      field.value = ""
    })
  }
  
  document.getElementById("save-product").addEventListener("click", getProductData)
  
  const saveProduct = product => {
    let xhttp = new XMLHttpRequest(); /**/
  
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(xhttp.response)
        $('#save-succesful').modal('show')
        //printTable( getAlbumsCollection() )
      }
    }
  
    xhttp.open("POST", "https://ajaxclass-1ca34.firebaseio.com/11g/room4/products.json", true);
  
    xhttp.send(JSON.stringify(product));
  }
  
  const getProductsCollection = () => {
    let productsCollection;
    let xhttp = new XMLHttpRequest();
  
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(xhttp.response)
        productsCollection = JSON.parse(xhttp.response)
      }
    }
  
    xhttp.open("GET", "https://ajaxclass-1ca34.firebaseio.com/11g/room4/products.json", false);
    //xhttp.open("DELETE", "https://ajaxclass-1ca34.firebaseio.com/11g/room4/products/-MXodlNVRvvjGZszWyn7.json", false );
    xhttp.send();
  
    return productsCollection
  }
  
  const deleteProduct = event => {
    let productKey = event.target.dataset.productKey
    console.log(productKey)
  
    let xhttp = new XMLHttpRequest();
  
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(xhttp.response)
        printCard(getProductsCollection())
      }
    }
  
    xhttp.open("DELETE", `https://ajaxclass-1ca34.firebaseio.com/11g/room4/products/${productKey}.json`, false);
    xhttp.send();
  }
  
  const productFilter = event =>{
    console.log("entra")
   /* let selectCategory = event.target.value;
    let arrayProductos = getProductsCollection();
    let newArrayProducts = arrayProductos.filter(product => product.category === selectCategory);
    printCard(newArrayProducts);
    console.log("filtra por" + selectCategory)*/
  }
  
  const printCard = dataToPrint => {
    console.log(dataToPrint)
    let cardContainer = document.getElementById("card-container")
  
    while (cardContainer.lastElementChild) {
      cardContainer.removeChild(cardContainer.lastElementChild);
    }
  
    for (key in dataToPrint) {
      console.log(key);
      console.log(dataToPrint[key]);
  
      let { category, description, image, name, price } = dataToPrint[key];
  
      let card = document.createElement("div");
      card.className = "card mt-2 col-12 col-md-6 col-lg-4 px-0 mr-1";
      let inputImg = document.createElement("img");
      inputImg.styles = "height:200px"
      
      let cardBody = document.createElement("div");
      cardBody.className = "card-body";
  
      let inputName = document.createElement("h3");
      inputName.className = "card-title";
      let inputDescription = document.createElement("p");
      inputDescription.className = "card-text";
      let inputCategory = document.createElement("p");
      inputCategory.className = "card-text";
      let inputPrice = document.createElement("p");
      inputPrice.className = "card-text";
      //let imageText = document.createTextNode(image);
      inputImg.src = image;
      let nameText = document.createTextNode(name);
      let descriptionText = document.createTextNode(description);
      let categoryText = document.createTextNode(category);
      let priceText = document.createTextNode(price);
  
      let deleteButton = document.createElement("button")
      deleteButton.classList = "btn btn-danger delete-button w-100"
      deleteButton.dataset.productKey = key
  
      let buttonText = document.createTextNode("Borrar")
      inputName.appendChild(nameText);
      inputDescription.appendChild(descriptionText);
      inputPrice.appendChild(priceText);
      inputCategory.appendChild(categoryText);
      deleteButton.appendChild(buttonText);
  
      cardBody.appendChild(inputName);
      cardBody.appendChild(inputDescription);
      cardBody.appendChild(inputCategory);
      cardBody.appendChild(inputPrice);
      cardBody.appendChild(deleteButton);
      card.appendChild(inputImg);
      card.appendChild(cardBody);
      cardContainer.appendChild(card);
    }
  
    let buttons = document.querySelectorAll(".delete-button")
  
    buttons.forEach(button => {
      button.addEventListener("click", deleteProduct)
    })
  
    let filter = document.getElementById("category");
    filter.addEventListener("change", productFilter)
    
  }
  
  
  printCard(getProductsCollection())
  