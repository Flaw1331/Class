// Getting references to the input fields, button, and lists
let nameInput = document.querySelector('#name');
let itemInput = document.querySelector('#item');
let perishableInput = document.querySelector('#perishable');

let submitBtn = document.querySelector('#submit');
let priority = document.querySelector('#priority');
let nonPriority = document.querySelector('#non-priority');

// When the submit button is clicked, call the handleSubmitClick function
submitBtn.addEventListener('click', handleSubmitClick);


function handleSubmitClick(event) {
  // The default behavior of a button clicked inside of a form is to try and submit the form somewhere (which we don't want)
  event.preventDefault();

  // Create a new movie patron object that will hold the data used to populate the page
  let newOrder = {
    name: nameInput.value.trim(),
    item: itemInput.value.trim(),
    perishable: perishableInput.value.trim()
  };

  // Clear the input fields
  nameInput.value = '';
  itemInput.value = '';
  perishableInput.value = '';

  let listButton = document.createElement('div');
  listButton.className = 'list-group-item';
  listButton.innerText = newOrder.name + ', ' + newOrder.item

  if newOrder.perishable.toLowerCase() === 'yes' || newOrder.perishable.toLowerCase() === 'y' {
    priority.appendChild(listButton);
  }

  else {
    nonPriority.appendChild(listButton)
    }
  }
  // Classify order as Priority if it is perishable and append to the right list





}

