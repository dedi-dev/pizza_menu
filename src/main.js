import data from '../src/data/pizza.js';

var selectedPizza = {};
var selectedSize = {};
var pricePizza = 0;
var priceSize = 0;
var priceTopping = 0;
var totalPrice = 0;

renderMenu();
renderSize();
renderTopping();
renderPrice();

document.querySelector('#menu').addEventListener('change', (e) => {
  const selectedId = e.target.value;
  selectedPizza = data.pizzas.find((p) => p.id === selectedId);
  pricePizza = selectedPizza.price;
  renderSize();
  renderTopping();
  renderPrice();
});

document.querySelector('#size').addEventListener('change', (e) => {
  const selectedId = e.target.value;
  selectedSize = data.sizes.find((p) => p.id === selectedId);
  priceSize = selectedSize.price;
  renderPrice();
});

document.querySelector('#topping').addEventListener('change', (e) => {
  priceTopping = 0;
  const checkboxes = document.querySelectorAll('input[name="topping"]');
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      priceTopping += Number(checkbox.value);
    }
  });

  renderPrice();
});

document.querySelector('#reset').addEventListener('click', (_) => {
  selectedPizza = {};
  selectedSize = {};
  pricePizza = 0;
  priceSize = 0;
  priceTopping = 0;
  totalPrice = 0;

  renderMenu();
  renderSize();
  renderTopping();
  renderPrice();
});

function renderMenu() {
  document.querySelector('#menu').innerHTML = '';
  data.pizzas.forEach((pizza) => {
    const node = document.createElement('div');
    node.className =
      'flex flex-col border-2 border-amber-500 rounded-2xl p-2 items-center';
    node.innerHTML = `
    <img src="${pizza.imgSrc}" alt="${pizza.name}" />
    <div class="flex items-center gap-1">
        <input type="radio" name="pizza" id="${pizza.id}" value="${pizza.id}"/> 
        <label for="${pizza.id}">${pizza.name}</label>
    </div>
    <div>$${pizza.price}</div>
  `;
    document.querySelector('#menu').appendChild(node);
  });
}

function renderSize() {
  document.querySelector('#size').innerHTML = '';
  data.sizes.forEach((size) => {
    const node = document.createElement('div');
    node.className = 'flex items-center gap-1';
    if (selectedPizza.id) {
      node.innerHTML = `
        <input type="radio" name="size" id="${size.id}" value="${size.id}">
        <label for="${size.id}">${size.name}</label>
    `;
    } else {
      node.innerHTML = `
        <input type="radio" name="size" id="${size.id}" value="${size.id}" disabled>
        <label class="text-gray-400" for="${size.id}">${size.name}</label>
    `;
    }
    document.querySelector('#size').appendChild(node);
  });
}

function renderTopping() {
  document.querySelector('#topping').innerHTML = '';
  data.toppings.forEach((topping) => {
    const node = document.createElement('div');
    node.className = 'flex items-center gap-1';
    if (topping.for.includes(selectedPizza.id)) {
      node.innerHTML = `
                <input type="checkbox" name="topping" id="${topping.id}" value="${topping.price}">
                <label for="${topping.id}">${topping.name}</label>
            `;
    } else {
      node.innerHTML = `
                <input type="checkbox" disabled name="topping" id="${topping.id}" value="${topping.price}">
                <label class="text-gray-400" for="${topping.id}">${topping.name}</label>
            `;
    }

    document.querySelector('#topping').appendChild(node);
  });
}

function countPrice() {
  totalPrice = pricePizza + priceSize + priceTopping;
}

function renderPrice() {
  countPrice();
  document.querySelector('#struk').innerHTML = '';
  document.querySelector('#totalPrice').innerHTML = '';

  document.querySelector(
    '#struk'
  ).innerHTML = `=$${pricePizza} + ($${priceSize}) + $${priceTopping}`;
  document.querySelector('#totalPrice').innerHTML = `=$${totalPrice}`;
}
