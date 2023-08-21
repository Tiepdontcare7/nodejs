import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect( process.env.MONGO_URL , {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connected to MongoDB');
    } catch (err) {
        console.log('Error connecting to MongoDB' + err);
    }
}

export default connect;