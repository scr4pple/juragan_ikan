const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.objectId;

const pencatatanPenjualanSchema = new mongoose.Schema({
    pencatatan_id: [{
        type: objectId,
        ref: 'pencatatan',
        required: true,
    }],
    jumlah_penjualan:{
        type: Number,
        required: [true, 'Jumlah penjualan tidak boleh kosong']
    },
    harga_penjualan:{
        type: Number,
        required: [true, 'Harga penjualan tidak boleh kosong']
    },
    keterangan:{
        type: Text,
        required: [true, 'Keterangan tidak boleh kosong']
    }
})

module.exports = mongoose.model('pencatatan_penjualan', pencatatanPenjualanSchema);