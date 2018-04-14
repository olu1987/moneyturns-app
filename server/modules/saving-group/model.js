import mongoose, { Schema } from 'mongoose';

const SavingGroupSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  payment: {
    type: Number,
    required: true,
    integer: String,
  },
  description: {
    type: String,
    required: true,
  },
  members: [Schema.Types.ObjectId],
}, { timestamps: true });

export default mongoose.model('saving-group', SavingGroupSchema);
