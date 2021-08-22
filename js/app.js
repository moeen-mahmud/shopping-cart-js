/**
 * I've added this comment for checking git lens
 */

// Main Function

function foodCounter(food, price, isAdding) {
  const foodCount = document.getElementById("input-value-" + food);
  let foodCountText = foodCount.value;

  if (isAdding == true) {
    foodCountText = parseInt(foodCount.value) + 1;
  } else if (foodCountText > 0) {
    foodCountText = parseInt(foodCount.value) - 1;
  }
  foodCount.value = foodCountText;

  //Update total price
  const totalPrice = document.getElementById(food + "-price");
  totalPrice.innerText = foodCountText * price;

  //Calculate the total
  totalCartAmount();
}

//Function for getting input
function inputQty(food) {
  const inputValue = document.getElementById("input-value-" + food);
  const inputValueParsed = parseInt(inputValue.value);
  return inputValueParsed;
}

//Calculate the total amount

function totalCartAmount() {
  const momoTotal = inputQty("momo") * 59;
  const ramenTotal = inputQty("ramen") * 79;
  const saladTotal = inputQty("salad") * 29;

  const subTotal = momoTotal + ramenTotal + saladTotal;
  const taxTotal = subTotal / 10;
  const grandTotal = subTotal + taxTotal;

  document.getElementById("total-price").innerText = subTotal;
  document.getElementById("total-vat").innerText = taxTotal;
  document.getElementById("grand-total").innerText = grandTotal;
}

// Function for addin momo
document.getElementById("btn-plus-momo").addEventListener("click", function () {
  foodCounter("momo", 59, true);
});

// Function for substracting momo
document
  .getElementById("btn-minus-momo")
  .addEventListener("click", function () {
    foodCounter("momo", 59, false);
  });

//funtion for adding ramen
document
  .getElementById("btn-plus-ramen")
  .addEventListener("click", function () {
    foodCounter("ramen", 79, true);
  });

//function for substracting ramen
document
  .getElementById("btn-minus-ramen")
  .addEventListener("click", function () {
    foodCounter("ramen", 79, false);
  });

//function for adding salad
document
  .getElementById("btn-plus-salad")
  .addEventListener("click", function () {
    foodCounter("salad", 29, true);
  });

//function for substracting salad
document
  .getElementById("btn-minus-salad")
  .addEventListener("click", function () {
    foodCounter("salad", 29, false);
  });

//removing item (momo)
document
  .getElementById("remove-btn-momo")
  .addEventListener("click", function () {
    document.getElementById("food-momo").style.display = "none";
  });

// removing item (ramen)
document
  .getElementById("remove-btn-ramen")
  .addEventListener("click", function () {
    document.getElementById("food-ramen").style.display = "none";
  });

//removing item (salad)
document
  .getElementById("remove-btn-salad")
  .addEventListener("click", function () {
    document.getElementById("food-salad").style.visibility = "hidden";
  });
