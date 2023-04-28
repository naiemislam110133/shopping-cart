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
        }
       
        phoneNumberField.value = newPhoneNumber;
        return newPhoneNumber;

    };


document.getElementById("phone-plus-btn").addEventListener("click", function(){
   const newPhoneNumber = updatePhoneNumber(true);     
    
  
});

document.getElementById("phone-minus-btn").addEventListener("click", function(){
    const newPhoneNumber = updatePhoneNumber(false);
});