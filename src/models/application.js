import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let applicationSchema = new Schema({

  //<editor-fold> Academic Level
  applicationStatus: [
    {
      applicationStatus: {
        type: String,
        length: 10,
        required: true
      },
      statusDate: {
        type: Date,
        default: Date.now
      },
      updatedBy: {
        type: String,
        length: 10
      }
    }
  ],
  entryLevel: {
    type: String,
    length: 20,
    required: true
  },
  term: {
    type: String,
    length: 20,
    required: true
  },
  program: {
    type: String,
    length: 25,
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
    type: String,
    length: 25
  },
  birthday: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    required: true,
    length: 6
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
        required: true,
        length: 100
      },
      townCity: {
        type: String,
        required: true,
        length: 50
      },
      province: {
        type: String,
        required: true,
        length: 50
      },
      zipCode: {
        type: String,
        length: 10
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
    type: String,
    length: 100
  },
  cellphone: {
    type: String,
    length: 30
  },
  homePhone: {
    type: String,
    length: 30
  },
  //</editor-fold>

  //<editor-fold> Academic History
  academicHistory: [
    {
      schoolYear: {
        type: String,
        required: true,
        length: 20
      },
      programName: {
        type: String,
        required: true,
        length: 75
      },
      schoolName: {
        type: String,
        required: true,
        length: 100
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
