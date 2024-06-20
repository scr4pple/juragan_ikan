const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.objectId;

const pencatatanikanSchema = new mongoose.Schema({
    pencatatan_id: [{
        type: objectId,
        ref: 'pencatatan',
        required: true,
    }],
    jumlah_ikan:{
        type: Number,
        required: [true, 'Jumlah ikan tidak boleh kosong']
    },
    harga_ikan:{
        type: Number,
        required: [true, 'Harga ikan tidak boleh kosong']
    },
    keterangan:{
        type: Text,
        required: [true, 'Keterangan tidak boleh kosong']
    }
})

module.exports = mongoose.model('pencatatan_ikan', pencatatanikanSchema);