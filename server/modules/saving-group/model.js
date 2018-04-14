import mongoose, { Schema } from 'mongoose';

const SavingGroupSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  payment: {
    type: Number,
    required: true,
    integer: true,
  },
  description: {
    type: String,
    required: true,
  },
  members: [{
    member_id: String,
    member_title: String,
  }],
}, { timestamps: true });

export default mongoose.model('saving-group', SavingGroupSchema);
