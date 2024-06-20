const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.objectId;

const profileSchema = new mongoose.Schema({
    user_id: [{
        type: objectId,
        ref: 'user',
        required: true
    }],
    nama: {
        type: Text,
        required: [true, 'Nama tidak boleh kosong'],
    },
    email : {
        type: String,
        unique: [true, 'Email yang dimasukan sudah terdaftar'],
        required: [true, 'Email tidak boleh kosong'],
        trim: true,
    },
    no_telepon: {
        type: Number,
        unique: [true, 'No telepon yang dimasukan sudah terdaftar'],
        required: [true, 'No telepon tidak boleh kosong'],
    },
    alamat: {
        type: Text,
        required: [true, 'Alamat tidak boleh kosong']
    }
})

module.exports = mongoose.model('profile', profileSchema);