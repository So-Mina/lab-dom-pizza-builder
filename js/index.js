// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'Pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible'
    } else {
      oneMush.style.visibility = 'hidden'
    }
  })
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGreenPep) => {
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = 'visible'
    } else {
      oneGreenPep.style.visibility = 'hidden'
    }
  }) 
}

function renderWhiteSauce() {
  document.querySelector('.sauce').classList.toggle('sauce-white')
}

function renderGlutenFreeCrust() {
  document.querySelector('.crust').classList.toggle('crust-gluten-free')
}

function renderButtons() {
  const pepBtn = document.querySelector('.btn.btn-pepperoni')
    if (state.pepperoni) {
      pepBtn.classList.add('active')
    } else {
      pepBtn.classList.remove('active')
    }

  const mushBtn = document.querySelector('.btn.btn-mushrooms')
    if (state.mushrooms) {
      mushBtn.classList.add('active')
    } else {
      mushBtn.classList.remove('active')
    }

  const greenPepBtn = document.querySelector('.btn.btn-green-peppers')
    if (state.greenPeppers) {
      greenPepBtn.classList.add('active')
    } else {
      greenPepBtn.classList.remove('active')
    }

  const sauceBtn = document.querySelector('.btn.btn-sauce')
    if (state.whiteSauce) {
      sauceBtn.classList.add('active')
    } else {
      sauceBtn.classList.remove('active')
    }

  const glutenBtn = document.querySelector('.btn.btn-crust')
    if (state.glutenFreeCrust) {
      glutenBtn.classList.add('active')
    } else {
      glutenBtn.classList.remove('active')
    }
}

function renderPrice() {
  let totalPrice = basePrice;
  const ul = document.querySelector('.panel.price ul');
  ul.innerHTML = null;
  for (const property in state) {
    if (state[property]) {
      totalPrice += ingredients[property].price;
      const newLi = document.createElement('li');
      ul.append(newLi);
      newLi.textContent = `${ingredients[property].price} ${ingredients[property].name}`;
    }
  }
  const finalPrice = document.querySelector('.panel.price strong');
  finalPrice.textContent = `${totalPrice}`; 
}

renderEverything();

document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni
  renderEverything()
});

document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms
  renderEverything()
});

document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
});

document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
});

document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
});