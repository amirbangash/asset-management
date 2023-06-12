// const mongoose = require('mongoose');
import mongoose from 'mongoose';

// const { MONGO_URI } = process.env;

function connect() {
    // Connecting to the database
    mongoose
        .connect(process.env.MONGOURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })
        .then(() => {
            console.log('Successfully connected to database');
        })
        .catch((error) => {
            console.log('database connection failed. exiting now...');
            console.error(error);
            process.exit(1);
        });
};
export default connect
// mongoose.connect(process.env.MONGOURI);
