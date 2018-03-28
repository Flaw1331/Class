// Getting references to the input fields, button, and lists
let nameInput = document.querySelector('#name');
let ageInput = document.querySelector('#age');
let submitBtn = document.querySelector('#submit');
let cannotWatchList = document.querySelector('#cannot-watch');
let canWatchList = document.querySelector('#can-watch');

// When the submit button is clicked, call the handleSubmitClick function
submitBtn.addEventListener('click', handleSubmitClick);

function isNumber(number) {
  return !isNaN(parseFloat(number)) && isFinite(number);
}

function handleSubmitClick(event) {
  // The default behavior of a button clicked inside of a form is to try to submit the form somewhere (which we don't want)
  event.preventDefault();

  // Create a new movie patron object that will hold the data used to populate the page
  let newMoviePatron = {
    name: nameInput.value.trim(),
    age: ageInput.value.trim()
  };

  // Clearing the input fields
  nameInput.value = '';
  ageInput.value = '';
  if (!isNumber(newMoviePatron.age))
  {
    alert('Not a number');
  }
  else if (newMoviePatron.age < 17) {
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerText = newMoviePatron.name;
    cannotWatchList.appendChild(li);
  }
  else {
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerText = newMoviePatron.name;
    canWatchList.appendChild(li);
  }
}
