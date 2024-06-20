const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.objectId;

const pencatatanpakanSchema = new mongoose.Schema({
    pencatatan_id: [{
        type: objectId,
        ref: 'pencatatan',
        required: true,
    }],
    jumlah_pakan:{
        type: Number,
        required: [true, 'Jumlah pakan tidak boleh kosong']
    },
    harga_pakan:{
        type: Number,
        required: [true, 'Harga pakan tidak boleh kosong']
    },
    keterangan:{
        type: Text,
        required: [true, 'Keterangan tidak boleh kosong']
    }
})

module.exports = mongoose.model('pencatatan_pakan', pencatatanpakanSchema);