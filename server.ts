import app from "./app";

const port: number = 9991;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

