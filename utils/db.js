import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();

const uri = 'mongodb+srv://blazeDbUser:znIXFYIIZhzLlxSQ@atlascluster.yaafq4m.mongodb.net/?retryWrites=true&w=majority';

const dbConnect = () => {
    mongoose.connect(uri)
        .then(() => console.log("db connected..."))
        .catch((err) => console.log(err.message));
}

export default dbConnect;
