const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.objectId;

const pencatatanSchema = new mongoose.Schema({
    user_id: [{
        type: objectId,
        ref: 'user',
        required: true,
    }],
    nama_menu: {
        type: String,
        requried: [true, 'Nama menu tidak boleh kosong'],
    },
    created_at : {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('pencatatan', pencatatanSchema);