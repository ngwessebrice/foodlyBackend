const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    otp: {type: String, required: true, default: "none"},
    password: {type: String, required: true},
    verification: {type: Boolean, default: false},
    phone: {type: String, default: "0123456789"},
    phoneVerification: {type: Boolean, default: false},
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address",
        required: false,
    },
    userType: {type: String, required: true, default: "Client", enum: ['Client', 'Admin', 'Vendor', 'Driver']},
    profile: {type: String, default: "https://media.licdn.com/dms/image/D4E35AQGDHNgGGJsXpg/profile-framedphoto-shrink_400_400/0/1696981792017?e=1708005600&v=beta&t=IEa_ST_9XghJLJ2HFs9TEmGHZXOAoHBzwAYHjtdXRgs"}
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema);
