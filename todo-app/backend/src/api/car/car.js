const restful = require('node-restful');
const mongoose = restful.mongoose;

const carSchema = new mongoose.Schema({
  marca: {
    type: String,
    required: true
  },
  modelo: {
    type: String,
    required: true
  },
  ano: {
    type: Number,
    required: true
  },
  flex: {
    type: Boolean,
    required: true
  },
  done: {
    type: Boolean,
    required: true,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = restful.model('Car', carSchema);
