module.exports = (() => {
    const mongoose = require('mongoose');

    const connectDB = async () => {
        try {
            await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/myapp', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log('Database connected successfully');
        } catch (error) {
            console.error('Database connection error:', error);
            process.exit(1);
        }
    };

    return connectDB;
})();
