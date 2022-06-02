let ddlcategory = document.getElementById('ddlcategory');
let category = document.getElementById('category');
let product = document.getElementById('product');
let quntity = document.getElementById('quntity');
let price = document.getElementById('price');
let descount = document.getElementById('descount');
let total = document.getElementById('total');

let CategoryArry;


localStorage.Category != null ? CategoryArry = JSON.parse(localStorage.Category) : CategoryArry = [];

//Svae Category
function SaveCategory() {

    let objCategory = {

        category: category.value
    };

    CategoryArry.push(objCategory);
    localStorage.setItem('Category', JSON.stringify(CategoryArry));
    Rest();
    ShowCategory();
   
}

//Rest Category
function Rest() {
    category.value = '';
}

//show Data 
function ShowCategory() {

    let item = '';
    item += `<option value="">Select Category........</option>`

    for (let i = 0; i < CategoryArry.length; i++) {

        item += `<option value="${i}">${CategoryArry[i].category}</option>`
    }
    ddlcategory.innerHTML = item;
}



//Rest Data
function Rest() {

   category.value = '';
}




$(document).ready(function() {
    ShowCategory();
    $('#tablPro').DataTable();
});