'use strict';

const mongoose = require('mongoose');

const DiarySchema = new mongoose.Schema({
    name: String,
    branch: String,
    slots: [String],
    active: Boolean
});

DiarySchema.swaggerName = 'Diary';

module.exports = mongoose.model('Diary', DiarySchema);
