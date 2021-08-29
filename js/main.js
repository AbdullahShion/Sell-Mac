// memory cost calculation

function getMemorySpecification(price) {
    document.getElementById("extra-memory-cost").innerText = price;
}

//  total costing calculation 

function totalCosting() {
    let totalCost =
        1299 +
        parseFloat(document.getElementById("extra-memory-cost").innerText) +
        parseFloat(document.getElementById("ssd-cost").innerText) +
        parseFloat(document.getElementById("delivery-cost").innerText);

    document.getElementById("total-price").innerText = totalCost;
    document.getElementById("final-total").innerText = totalCost;
    return totalCost;
}

// memory choose event handler

document.getElementById("memory8").addEventListener("click", () => {
    getMemorySpecification(0);
    // total cost
    totalCosting();
});
document.getElementById("memory16").addEventListener("click", () => {
    getMemorySpecification(180);
    // total cost
    totalCosting();
});

// delivery charge fucntion

function deliveryCost(cost) {
    document.getElementById("delivery-cost").innerText = cost;
}
document.getElementById("free-shipping").addEventListener("click", () => {
    deliveryCost(0);
    totalCosting();

    
});
document.getElementById("paid-shipping").addEventListener("click", () => {
    deliveryCost(20);
    totalCosting();


});

// ssd storage price set function

function storageCapacity(price) {
    document.getElementById("ssd-cost").innerText = price;


}

// Storage choose event handler

document.getElementById("ssd256").addEventListener("click", () => {
    storageCapacity(0);

    totalCosting();


});
document.getElementById("ssd512").addEventListener("click", () => {
    storageCapacity(100);

    totalCosting();
});
document.getElementById("ssd1t").addEventListener("click", () => {
    storageCapacity(180);
    totalCosting();


});



// promo code checking

document.getElementById("button-promo").addEventListener("click", () => {
    let promoCode = document.getElementById("promo-code");
    let promoCodeValue = promoCode.value;

    if (promoCodeValue == "stevekaku") {
        let previousCosting = totalCosting();
        console.log(previousCosting);
        let discount = (previousCosting * 20) / 100;

        let newCostingUsingPromo = previousCosting - discount;

        document.getElementById("final-total").innerText = newCostingUsingPromo;
        promoCode.value = "";
    }
});
