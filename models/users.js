const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        unique: [true, 'Username already exist'],
        required: [true, 'Username cannot empty'],
        trim: true,
    },
    password : {
        type: String,
        required: [true, 'password cannot empty'],
    },
    created_at: {
        type: Date,
        default: Date.now,
    }
})

// encryption password
userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
})

module.exports = mongoose.model('user', userSchema);