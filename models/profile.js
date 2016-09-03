/**
 * Created by MAShahsavand on 8/18/16 AD.
 */
var mongoose = require('mongoose');

var ProfileSchema = new mongoose.Schema({
    joinDate: Date,
    type: String,
    credit: Double,
    expirationDate: Date
});

ProfileSchema.methods.increaseCredit = function(creditAmount){
    this.credit = this.credit+creditAmount;
};

ProfileSchema.methods.decreaseCredit = function(creditAmount){
    this.credit = this.credit-creditAmount;
};

ProfileSchema.methods.setAccToPremium = function(){
    var d = new Date();
    d.setYear(d.getFullYear()+2);
    this.type = "premium";
    this.expirationDate.setYear(d.getFullYear());
};

ProfileSchema.methods.setAccToFree = function(){
    this.type = "free";
    this.expirationDate.setYear(this.expirationDate.getFullYear()+200);
};

ProfileSchema.methods.extendPremiumAcc = function(){
    if(this.type == "premium")
        this.expirationDate.setYear(this.expirationDate.getFullYear()+2);
};