// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
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
  // Iteration 3: add/remove the class "active" of each `<button class="btn">
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

      // try to find a shorter code
}


function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

  // if pepperoni: display ingredient + add price: 1 
  // if mushrooms: display ingredient + add price: 1
  // if greenPeppers: display ingredient + add price: 1 
  // if whiteSauce: display ingredient + add price: 3 
  // if glutenFreeCrust: display ingredient + add price: 5

  // base cheese pizza = 10

}

renderEverything();


// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni
  renderEverything()
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms
  renderEverything()
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
});