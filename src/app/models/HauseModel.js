import { Schema, model } from 'mongoose';
import { fullUrl } from '../utils/formatURL.js';

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
},{
	toJSON: {
		virtuals: true,
	}
});

HauseSchema.virtual('thumbnail_url').get(function(req, res){
	return `http://localhost:3001/files/${this.thumbnail}`
});

export default model('Hause', HauseSchema);


