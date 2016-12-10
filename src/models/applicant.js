import mongoose from 'mongoose';

let applicantSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    length: 50
  },
  password: {
    type: String,
    required: true
  },
  givenName: {
    type: String,
    length: 25,
    required: true
  },
  lastName: {
    type: String,
    length: 25,
    required: true
  },
  middleName: {
    type: String,
    length: 25
  },
  birthday: {
    type: Date,
    required: true
  },
  isConfirmed: {
    type: Boolean,
    default: false
  },
  lastLogin: {
    type: Date
  },
  isAccountLocked: {
    type: Boolean
  },
  accountStatus: [
    {
      statusName: {
        type: String,
        required: true
      },
      statusDate: {
        type: Date,
        default: Date.now
      },
      updatedBy: {
        type: String
      }
    }
  ]
});

module.exports = mongoose.model('Applicant', applicantSchema);
