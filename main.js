var customers = data.results;

var html = "";

for (i = 0; i < customers.length; i++) {
  var customer = customers[i];

  html += newCustomer(customer.picture.medium, customer.name.first, customer.name.last, customer.email, customer.location.street, customer.location.city, customer.location.state, customer.location.postcode, customer.phone);
}

document.querySelector('.wrapper').innerHTML = html;

function newCustomer(img, first, last, email, street, city, state, postcode, tel) {
  let post = `
        <div class="employee">
          <img href=${img}>
          <h3 class="name">${first} ${last}</h3>
          <span class="email">${email}</span>
          <ul class="locinfo">
          <li>${street}</li>
          <li>${city} ${state} ${postcode}</li>
          <li>${tel}</li>
          </ul
        </div>`;
  return post;
}

//loop through all the customers
//in each loop generate some html for that specific customer.
//end of loop
//add generated html to dom or index.html page dynamically with javascript
