import Hause from '../models/HauseModel.js';

class HauseController{
	async store(req, res){
		const { filename } = req.file;
		const { description, price, location, status } = req.body;
		const userId = req.headers.user_id;
		const hause = await Hause.create({
			user: userId,
			thumbnail: filename,
			description,
			price,
			location,
			status,
		});

		return res.json(hause);
	}
}

export default new HauseController();
