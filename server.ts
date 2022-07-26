import app from "./app";
import mongoose from 'mongoose';

const { DB_HOST, PORT = 9991 } = process.env;
if (!DB_HOST) {
    console.error('Error:BD_HOST is:', DB_HOST);
    process.exit(1);
}
mongoose.connect(DB_HOST)
    .then(() => {
        console.log("Database connect success")
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    })
    .catch(error => {
        console.log(error);
        process.exit(1);
    });


