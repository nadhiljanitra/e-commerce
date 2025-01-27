const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const transactions = new Schema({
  userId : {type : Schema.Types.ObjectId, ref : 'User'},
  cart : [{
    product: {
      type: Schema.Types.ObjectId, ref : 'Product'
    },
    qty:{
      type: Number
    }
  }]
},{
  timestamps : true
})

const Transaction = mongoose.model('Transaction',transactions)
module.exports = Transaction 