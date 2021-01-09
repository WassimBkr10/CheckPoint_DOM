// select the plus buttons 
let plus = document.querySelectorAll(".quantity .plus");
// select the less buttons 
let less = document.querySelectorAll(".quantity .less");
// select the quantity numbers
let qte = document.querySelectorAll(".quantity .qte");
// select the price values 
let price = document.querySelectorAll("tbody .price");
// select the total price per product 
let totalPrice = document.querySelectorAll("tbody .total-price");
// select the total price 
let total = document.querySelectorAll("tbody .total");
// select the subtotal price 
let subtotal = document.querySelectorAll("tbody .sub-total");


// create the for's loop over the plus button 
for (let i = 0; i < plus.length; i++) {
    // add event to the plus buttons 
    plus[i].addEventListener("click", () => {
        // quantity incrementation 
        qte[i].innerHTML++;
        // calcul the total price per product 
        totalPrice[i].innerHTML = (parseFloat(price[i].textContent) * qte[i].innerHTML).toFixed(2) + " $";
        // calcul the total price 
        total[0].innerHTML = (parseFloat(totalPrice[0].textContent) + parseFloat(totalPrice[1].textContent) + parseFloat(totalPrice[2].textContent) + 6.90).toFixed(2) + " $";
        // calcul the subtotal price 
        subtotal[0].innerHTML = (parseFloat(totalPrice[0].textContent) + parseFloat(totalPrice[1].textContent) + parseFloat(totalPrice[2].textContent)).toFixed(2) + " $";
    });

    // add event to the less buttons 
    less[i].addEventListener("click", () => {
        // add condition to deactivate the button if qte under 1 
        if (qte[i].innerHTML > 1) {
            qte[i].innerHTML--;
            // calcul the total price per product 
            totalPrice[i].innerHTML = (parseFloat(price[i].textContent) * qte[i].innerHTML).toFixed(2) + " $";
            // calcul the total price 
            total[0].innerHTML = (parseFloat(totalPrice[0].textContent) + parseFloat(totalPrice[1].textContent) + parseFloat(totalPrice[2].textContent) + 6.90).toFixed(2) + " $";
            // calcul the subtotal price 
            subtotal[0].innerHTML = (parseFloat(totalPrice[0].textContent) + parseFloat(totalPrice[1].textContent) + parseFloat(totalPrice[2].textContent)).toFixed(2) + " $";
            // put qte = 1 
        } else {
            qte[i].innerHTML == 1;
        }
    });

    // select the delete buttons 
    let deleteProd = document.querySelectorAll(".delete-btn");
    // add event to the delete buttons 
    deleteProd[i].addEventListener("click", () => {

        // add a confirmation message to the user 
        let cnf = confirm('Are you sure to delete this Product ?');
        // add condition after the confirmation from the user 
        if (cnf == true) {
            // select the parent tbody and delete the row td 
            deleteProd[i].parentNode.parentNode.parentNode.removeChild(deleteProd[i].parentNode.parentNode);
            // Subtract the price from the total 
            total[0].innerHTML = (parseFloat(total[0].innerHTML) - parseFloat(totalPrice[i].textContent)).toFixed(2);
            // Subtract the price from the subtotal 
            subtotal[0].innerHTML = (parseFloat(subtotal[0].innerHTML) - parseFloat(totalPrice[i].textContent)).toFixed(2);
            // never delete if the user chose cancel 
        } else {
            return false;
        }
    });

    // select the like buttons 
    let like = document.querySelectorAll(".btn-outline-danger");

    // add event to the buttons 
    like[i].addEventListener("click", () => {
        // select the toggle class in the file style.css
        like[i].classList.toggle("like");
    })


}