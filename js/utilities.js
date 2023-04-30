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


    
   
};


