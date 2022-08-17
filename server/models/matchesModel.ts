import mongoose from 'mongoose';
import { Matches } from '../../globalUtils/Types';

const MatchesSchema = new mongoose.Schema<Matches>({
  userId: { type: String, required: true },
  matchIds: { type: [String], required: true },
});

const MatchesModel = mongoose.model('Matches', MatchesSchema);

export default MatchesModel;
