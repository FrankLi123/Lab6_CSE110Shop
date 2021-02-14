// product-item.js

class ProductItem extends HTMLElement {

  constructor(image,title,price){
    super(); 

    var shadowroot = this.attachShadow({mode:'open'})

    const img = document.createElement('img');
    img.setAttribute('src',image);
    img.setAttribute('alt',title);

    const button = document.createElement('button');
    button.textContent="Add to Cart!"

    var price=document.createElement('p');
    price.textContent=price;

    var title=document.createElement('p');
    title.setAttribute('alt',title);
    title.textContent= title;

    const style= document.createElement('style');
   
    const li=document.createElement('li');
    li.setAttribute('class','product');

    li.appendChild(title);
    li.appendChild(price);
    li.appendChild(img);
    li.appendChild(button);
    li.appendChild(style);
    
    this.shadowroot.appendChild(style);
    this.shadowroot.appendChild(li);

  }
}
customElements.define('product-item', ProductItem);
