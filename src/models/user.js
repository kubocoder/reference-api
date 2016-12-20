import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let userSchema = new Schema({
  local: {
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: true,
      length: 25
    },
    password: {
      type: String,
      required: true,
      length: 16
    }
  },
  facebook: {
    id: {
      type: String
    },
    token: {
      type: String
    },
    name: {
      type: String
    },
    email: {
      type: String
    }
  },
  google: {
    
  },
  twitter: {
    
  },
  role: {
    type: String,
    enum: ['Client', 'Manager', 'Admin'],
    default: 'Client'
  }
});

module.exports = mongoose.model('User', userSchema);
