import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now }
});

export default mongoose.model('User', userSchema);
