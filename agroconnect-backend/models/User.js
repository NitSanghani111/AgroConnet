const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    userType: { type: String, required: true, enum: ['farmer', 'buyer'] },
    password: { type: String, required: true },
    username: { type: String, unique: true, required: true },
    country: { type: String, required: true },
    state: { type: String, required: true },
    documentNo: { type: String, required: true },
    proofDocument: { type: String },
    profilePhoto: { type: String },
});

// Password hashing before saving user
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = mongoose.model('User', userSchema);
