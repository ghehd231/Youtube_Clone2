import app from "./app";



const handleListening = () => {
    console.log(`Listening on: http://localhost:${PORT}`);
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, handleListening);
