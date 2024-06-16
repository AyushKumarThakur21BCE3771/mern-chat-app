import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect("mongodb+srv://ayush524425:aoZgvcN8s5K1VYkb@chatie.zrcqwp7.mongodb.net/?retryWrites=true&w=majority&appName=chatie");
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;

// cSPRROO61KpLe8Wb
