const mongoose = require('mongoose');
// const objectId = mongoose.Schema.Types.objectId;

const faqSchema = new mongoose.Schema({
    pertanyaan: {
        type: Text,
        required: [true, 'pertanyaan tidak boleh kosong'],
    },
    jawaban: {
        type: Text,
        required: [true, 'jawaban tidak boleh kosong'],
    },
})

module.exports = mongoose.model('faq', faqSchema);