import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
  pets: Array,
});

const User = mongoose.model('User', userSchema);

export default User;
