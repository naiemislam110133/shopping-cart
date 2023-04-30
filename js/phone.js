    function updatePhoneNumber(isIncrese){
        const phoneNumberField = document.getElementById("phone-number-field");
        const phoneNumberString = phoneNumberField.value;
        const previousPhoneNumber = parseInt(phoneNumberString);

        let newPhoneNumber;
        if (isIncrese) {
            newPhoneNumber = previousPhoneNumber + 1 ;
        }
        else{
            newPhoneNumber = previousPhoneNumber - 1;
            if(newPhoneNumber < 0 ){
                return 0;
            }
        }
       
        phoneNumberField.value = newPhoneNumber;
        return newPhoneNumber;

    };

    function updatePhoneTotalPrice(newPhoneNumber){
        const phoneTotalPrice = newPhoneNumber * 1219;
        console.log(phoneTotalPrice);
        const phoneTotalElement = document.getElementById('phone-total');
        phoneTotalElement.innerText = phoneTotalPrice;
    
    };


document.getElementById("phone-plus-btn").addEventListener("click", function(){
   const newPhoneNumber = updatePhoneNumber(true); 
   updatePhoneTotalPrice(newPhoneNumber); 

   calculateSubTotal();
   
});

    // phone minus button 

document.getElementById("phone-minus-btn").addEventListener("click", function(){
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
});