import { Schema, model } from 'mongoose';

const journalSchema = new Schema({
  title: {
    type: String,
    trim: true,
    lowercase: true,
    minlength: 3,
    maxlength: 150,
    required: true
  },
  body: {
    type: String,
    trim: true,
    lowercase: true,
    minlength: 3,
    required: true
  },
  username: { type: String, required: true },
  userId: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now }
});

export default model('Journal', journalSchema);
