// Script.js

window.addEventListener('DOMContentLoaded', () => {
 
  myStorage = window.localStorage;
  i=0;
  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => window.localStorage.setItem('1',JSON.stringify(data)));

  var container = document.createElement("proruct-list-container");

  var item = window.localStorage.getItem('1');

  for (let i=0;i<20;i++){
    var newItem = document.createElement("product-item");
    newItem.setAttribute(item[1]);
    container.appendChild(newItem)
  }

});