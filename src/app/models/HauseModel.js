import { Schema, model } from 'mongoose';

const HauseSchema = new Schema({
    thumbnail: String,
		description: String,
		price: Number,
		location: String,
		status: Boolean,
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		}
});

export default model('Hause', HauseSchema);
