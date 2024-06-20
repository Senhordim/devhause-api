import Hause from '../models/HauseModel.js';
import User from '../models/UserModel.js';

class HauseController{

	async index(req, res){
		const { status } = req.query;
		const hauses = await Hause.find({status: status});
		res.json(hauses);
	};

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
	};

	async show(req, res){
		const { id } = req.params;
		const hause = await Hause.findById(id);
		return res.json(hause);
	};

	async update(req, res){
		const { id } = req.params;
		const { filename } = req.file;
		const { description, price, location, status } = req.body;
		const userId = req.headers.user_id;

		const user = await User.findById(userId);
		const userHause = await Hause.findById(id);

		if(String(user._id) !== String(userHause.user)){
			return res.status(401).json({
				error: {
					message: 'Não autorizado!'
				}
			})
		}

		await Hause.updateOne(
			{_id: id},
			{
				user: userId,
				thumbnail: filename,
				description,
				price,
				location,
				status,
			}
		);

		res.send();
	}

	async destroy(req, res){
		const { id } = req.params;
		const userId = req.headers.user_id;

		const user = await User.findById(userId);
		const userHause = await Hause.findById(id);

		if(String(user._id) !== String(userHause.user)){
			return res.status(401).json({
				error: {
					message: 'Não autorizado!'
				}
			})
		}

		await Hause.deleteOne({_id: id });

		res.send();
	}
}

export default new HauseController();
