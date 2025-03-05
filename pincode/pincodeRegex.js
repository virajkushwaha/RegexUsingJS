class Pincode{
    constructor(pincode){
        //Validate pincode
        if(!this.validatePincode(pincode)){
            throw "Invalid pincode";
        }
        this.pincode = pincode;
    }
    //Validate pincode
     validatePincode(pincode){
        return (/^[1-9]\s[0-9]{5}$/)||(/^[1-9][0-9]{5}$/).test(pincode);
        }
    
    
}

try{
    let pincode = new Pincode("400088");
    console.log(pincode);
    let pincode2 = new Pincode("400 088"); 
    console.log("Valid:", pincode2);
}
catch(e){
    console.log(e);
    }