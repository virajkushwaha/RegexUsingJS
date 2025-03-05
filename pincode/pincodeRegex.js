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
        return /^[1-9][0-9]{5}$/.test(pincode);
        }
    
    
}

try{
    let pincode = new Pincode("400088");
    console.log(pincode);
  
}
catch(e){
    console.log(e);
    }