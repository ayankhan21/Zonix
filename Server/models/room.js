const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  // Other room-related fields
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
