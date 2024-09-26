import mongoose from 'mongoose'


export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://fernandoalfaro209:OCknk0knacY5JF1d@cluster0.4b2ox.mongodb.net/');
        console.log(">>> DB is conected");
    } catch (error) {
        console.error(error);
    }
};

