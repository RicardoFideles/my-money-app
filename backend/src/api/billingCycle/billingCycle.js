const restful = require('node-restful')
const mongoose = restful.mongoose;

var creditSchema = mongoose.Schema({
    name : { type: String,required: true, trim: true},
    value : { type:Number, min : 0, required : [true, 'Informe o valor do débito'] }
});

var debtSchema = mongoose.Schema({
    name : { type: String,required: true, trim: true},
    value : { type:Number, min : 0, required : [true, 'Informe o valor do débito'] },
    status : { type:String, required: false, uppercase: true, enum : ['PAGO', 'PENDENTE', 'AGENDADO']}
});

var billingCycleSchema = mongoose.Schema({
    name : { type: String,required: true, trim: true},
    month : { type:Number, min : 0, max : 12, required : true },
    year : { type:Number, min : 1970, max : 2100, required : true },
    credits : [creditSchema],
    debts : [debtSchema]
});

module.exports =  restful.model('BillingCycle', billingCycleSchema);