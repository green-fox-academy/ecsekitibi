'use strict'

window.onload = () => {
  const firstSet = document.querySelector(".first-set");
  const secondSet = document.querySelector(".second-set");
  const submitButton = document.querySelector("button[type=submit]");
  const catButton = document.querySelector("button[type=button]");

  firstSet.addEventListener('change', (event) => {
    console.log(event);
    if (event.target.id == 'dog' || event.target.id == 'cat')
      submitButton.disabled = false;
  })

  secondSet.addEventListener('change', (event) => {
    console.log(event);
    if (event.target.id == 'yes') {
      catButton.disabled = false;
    }
  })

  catButton.addEventListener('click', () => {
    alert(`Thank you, you've successfully signed up for cat facts`)
  })

  submitButton.addEventListener('click', () => {
    alert(`Thank you, you've successfully signed up for cat facts`)
  })
}


