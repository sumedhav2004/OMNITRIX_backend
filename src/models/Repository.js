const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['file', 'directory'],
        required: true,
    },
    size: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const RepositorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    files: [FileSchema],  // Embedded array of files/folders
    commits: [{
        message: { type: String },
        date: { type: Date }
    }]
});

module.exports = mongoose.model('Repository', RepositorySchema);
