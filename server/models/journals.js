import mongoose from 'mongoose';

const journalSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now }
});

export default mongoose.model('Journal', journalSchema);
