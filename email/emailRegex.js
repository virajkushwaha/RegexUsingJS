class Email{
    constructor(email){
        //Validate pincode
        if(!this.validateEmail(email)){
            throw "Invalid email";
        }
        this.email = email;
    }
    //Validate Email
     validateEmail(email){
        return /^[a-z]{3,}.[a-z]{2,}@bridgelabz.[a-z]{2}.[a-z]{2}/.test(email);
        }
    
    
}

try{
    let email = new Email("abc.xyz@bridgelabz.co.in");
    console.log(email);
    let email2 = new Email("400 088"); 
    console.log("Valid:", email2);
}
catch(e){
    console.log(e);
    }