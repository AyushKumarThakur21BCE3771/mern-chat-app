import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect("mongodb+srv://ayush524425:cSPRROO61KpLe8Wb@cluster0.ovbanc7.mongodb.net/chatie-app-db?retryWrites=true&w=majority&appName=Cluster0");
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;

// cSPRROO61KpLe8Wb