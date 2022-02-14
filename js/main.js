function getElement(id){
    return document.getElementById(id);
}
function createElements(id){
    return document.createElement(id);
}

function addition(value1, value2){
    return parseFloat(value1) + parseFloat(value2);
}
function multiplication(value1, value2){
    return parseFloat(value1) * parseFloat(value2);
}
function totalCalculation(){
    const subTotal = subTotalCalculation();


    const tax = multiplication(subTotal, 0.2);

    const grandTotal = addition(subTotal, tax);

    getElement("tax").innerText = tax.toFixed(2);
    getElement("sub-total").innerText = subTotal;
    getElement("grand-total").innerText = grandTotal;
    getElement("grand-total-2").innerText = grandTotal;

}
function subTotalCalculation(){
    let subTotal = 0;

    const itemsTotal = document.getElementsByClassName("item-total");
    for(const itemTotal of itemsTotal){

        subTotal = addition(subTotal, itemTotal.innerText);
    }
    return subTotal;
}

getElement("detail-submit-btn").addEventListener("click", function(event){
    const buyerDetails = document.getElementById("buyer-details-input");
    getElement("buyer-info").innerText = buyerDetails.value;
    buyerDetails.value = "";
});

getElement("add-details-btn").addEventListener("click", function(event){
    const infoTable = getElement("info-table");
    const itemName = getElement("item-name-input");
    const itemPrice = getElement("item-price-input");
    const itemQuantity = getElement("item-quantity-input");

    if(itemName.value == "" || itemPrice.value == "" || itemPrice.value < 0 || itemQuantity.value == "" || itemQuantity.value < 0){
        alert("Enter a valid input");
    }

    const totalPrice = multiplication(itemPrice.value, itemQuantity.value);

    const tr = createElements("tr");
    const th = createElements("th");

    const td1 = createElements("td");
    const td2 = createElements("td");
    const td3 = createElements("td");

    td3.classList.add("item-total");

    th.innerText = itemName.value;
    td1.innerText = itemPrice.value;
    td2.innerText = itemQuantity.value;
    td3.innerText = totalPrice;

    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    infoTable.appendChild(tr);

    totalCalculation();

    itemName.value = "";
    itemPrice.value = "";
    itemQuantity.value = "";
});