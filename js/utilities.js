function getTextElementValueById(elementId){
    const TotalElement = document.getElementById(elementId);
    const TotalValueString = TotalElement.innerText;
    const currentTotalPrice = parseInt(TotalValueString);
    return currentTotalPrice;
};

function setTextElementValueById(elementId, value){
    const totalPrice = document.getElementById(elementId);
    totalPrice.innerText = value;
};

function calculateSubTotal(){

    const currentPhoneTotalPrice = getTextElementValueById('phone-total');
    const currentCaseTotalPrice = getTextElementValueById('case-total');

    const subTotalPrice = currentPhoneTotalPrice + currentCaseTotalPrice;
    setTextElementValueById('sub-total', subTotalPrice);

    // calculate tax

    const taxAmount = parseFloat((subTotalPrice * 0.1).toFixed(2));
    setTextElementValueById('tax-amount', taxAmount);


    // calculate total price

    const finalPrice = subTotalPrice + taxAmount; 
    setTextElementValueById('total-price', finalPrice);

   
};


