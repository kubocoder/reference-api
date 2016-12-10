import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let applicationSchema = new Schema({

  //<editor-fold> Academic Level
  applicationStatus: [
    {
      applicationStatus: {
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
  ],
  entryLevel: {
    type: String,
    required: true
  },
  term: {
    type: String,
    required: true
  },
  program: {
    type: String,
    required: true
  },
  isFormerStudent: {
    type: Boolean,
    default: false
  },
  prevStudentNm: {
    type: Number
  },
  //</editor-fold>

  //<editor-fold> Personal Information
  givenName: {
    type: String,
    required: true,
    length: 25
  },
  lastName: {
    type: String,
    required: true,
    length: 25
  },
  middleName: {
    type: String
  },
  birthday: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  //</editor-fold>

  //<editor-fold> Address Information
  address: [
    {
      isPrimary: {
        type: Boolean,
        default: false
      },
      isMailing: {
        type: Boolean,
        default: false
      },
      streetAddress: {
        type: String,
        required: true
      },
      townCity: {
        type: String,
        required: true
      },
      province: {
        type: String,
        required: true
      },
      zipCode: {
        type: String
      },
      dateCreated: {
        type: Date,
        default: Date.now
      }
    }
  ],
  //</editor-fold>

  //<editor-fold> Contact Information
  email: {
    type: String
  },
  cellphone: {
    type: String
  },
  homePhone: {
    type: String
  },
  //</editor-fold>

  //<editor-fold> Academic History
  academicHistory: [
    {
      schoolYear: {
        type: String,
        required: true
      },
      programName: {
        type: String,
        required: true
      },
      schoolName: {
        type: String,
        required: true
      },
      isCompleted: {
        type: Boolean
      },
      dateCompleted: {
        type: Date
      }
    }
  ],
  //</editor-fold>

  //<editor-fold> Declarations
  termsAgreed: {
    type: Boolean,
    required: true
  },
  honestyDeclared: {
    type: Boolean,
    required: true
  }
  //</editor-fold>
});

module.exports = mongoose.model('Application', applicationSchema);
