var form = document.getElementById('contact-form');
    
// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the input field values
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var email= document.getElementById('email').value;
    var subject = document.getElementById('subject').value;

    // Perform validation if required

    // Create the alert message
    var message = "Name: " + firstName + " " + lastName + "\n" +
                  "Email: " + email+ "\n" +
                  "Message: " + subject;

    // Display the alert with the message
    alert(message);

    // Reset the form
    form.reset();
});

/* aple series 7 red */
function calculateTotal() {
    const quantity = document.getElementById('quantity').value;
    const price1 = 299; // Assuming the price is 299 per item
    const total = quantity * price1;
    document.getElementById('totalPrice').textContent = total;
}

function buy() {
    const quantity = document.getElementById('quantity').value;
    const total = document.getElementById('totalPrice').textContent;
    alert(`Thank you for purchasing ${quantity} items. Total: $${total}`);
}
//apple series 7 red//
//apple 7 blue
function calculateTotal1() {
    const quantity1 = document.getElementById('quantity1').value;
    const price2= 399; // Assuming the price is 299 per item
    const total1 = quantity1 * price2;
    document.getElementById('totalPrice1').textContent = total1;
}

function buy2() {
    const quantity1 = document.getElementById('quantity1').value;
    const total1 = document.getElementById('totalPrice1').textContent;
    alert(`Thank you for purchasing ${quantity1} items. Total: $${total1}`);
}
//apple 7 blue
//apple 6 black
function calculateTotal2() {
    const quantity2 = document.getElementById('quantity2').value;
    const price3= 150; // Assuming the price is 150 per item
    const total2 = quantity2 * price3;
    document.getElementById('totalPrice2').textContent = total2;
}

function buy3() {
    const quantity2 = document.getElementById('quantity2').value;
    const total2 = document.getElementById('totalPrice2').textContent;
    alert(`Thank you for purchasing ${quantity2} items. Total: $${total2}`);
}
//apple 6 black
//apple 6 gold
function calculateTotal3() {
    const quantity3= document.getElementById('quantity3').value;
    const price4= 200; // Assuming the price is 200 per item
    const total3 = quantity3 * price4;
    document.getElementById('totalPrice3').textContent = total3;
}

function buy4() {
    const quantity3 = document.getElementById('quantity3').value;
    const total3 = document.getElementById('totalPrice3').textContent;
    alert(`Thank you for purchasing ${quantity3} items. Total: $${total3}`);
}
//apple 6 gold
//smart watch white
function calculateTotal4() {
    const quantity4= document.getElementById('quantity4').value;
    const price5= 100; // Assuming the price is 100 per item
    const total4 = quantity4 * price5;
    document.getElementById('totalPrice4').textContent = total4;
}

function buy5() {
    const quantity4 = document.getElementById('quantity4').value;
    const total4 = document.getElementById('totalPrice4').textContent;
    alert(`Thank you for purchasing ${quantity4} items. Total: $${total4}`);
}
//smart watch white
//smart watch blue
function calculateTotal5() {
    const quantity5= document.getElementById('quantity5').value;
    const price6= 80; // Assuming the price is 80 per item
    const total5 = quantity5 * price6;
    document.getElementById('totalPrice5').textContent = total5;
}

function buy6() {
    const quantity5 = document.getElementById('quantity5').value;
    const total5 = document.getElementById('totalPrice5').textContent;
    alert(`Thank you for purchasing ${quantity5} items. Total: $${total5}`);
}
//smart watch blue
//smart watch yellow
function calculateTotal6() {
    const quantity6= document.getElementById('quantity6').value;
    const price7= 90; // Assuming the price is 90 per item
    const total6 = quantity6 * price7;
    document.getElementById('totalPrice6').textContent = total6;
}

function buy7() {
    const quantity6 = document.getElementById('quantity6').value;
    const total6 = document.getElementById('totalPrice6').textContent;
    alert(`Thank you for purchasing ${quantity6} items. Total: $${total6}`);
}
//smart watch yellow

//smart watch pink
function calculateTotal7() {
    const quantity7= document.getElementById('quantity7').value;
    const price8= 95; // Assuming the price is 95 per item
    const total7 = quantity7 * price8;
    document.getElementById('totalPrice7').textContent = total7;
}

function buy8() {
    const quantity7 = document.getElementById('quantity7').value;
    const total7 = document.getElementById('totalPrice7').textContent;
    alert(`Thank you for purchasing ${quantity7} items. Total: $${total7}`);
}
//smart watch pink