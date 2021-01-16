import * as mongoose from 'mongoose';

export const CrmSchema = new mongoose.Schema({
  user: Object,
  info: Object,
});
