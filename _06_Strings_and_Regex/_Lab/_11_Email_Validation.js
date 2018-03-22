function emailValidation(email)
{
    let emailFormat = /^[a-zA-Z0-9]+@[a-z]+(\.[a-z]+)+$/g;

    if (emailFormat.test(email)){
        console.log("Valid");
    }
    else{
        console.log("Invalid");
    }

}
emailValidation('valid@email.bg');
emailValidation('invalid@emai1.bg');
