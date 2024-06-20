const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.objectId;

const artikelSchema = new mongoose.Schema({
    user_id: [{
        type: objectId,
        ref: 'user',
        required: true,
    }],
    judul_artikel: {
        type: String,
        unique: [true, 'Judul artikel sudah ada'],
        required: [true, 'Judul artikel tidak boleh kosong'],
    },
    konten_artikel: {
        type: Text,
        required: [true, 'Konten artikel tidak boleh kosong'],
    },
    tanggal_publikasi : {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('artikel', artikelSchema);