const URI = 'mongodb://localhost/mymoney';
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "O '{VALUE}' não é válido para o atributo '{PATH}'."

var promise = mongoose.connect(URI, {
  useMongoClient: true,
});

promise.then(function(db) {
    console.log(`Connect to mongodb ${db}`);
});

module.exports = {mongoose};
