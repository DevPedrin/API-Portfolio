import express from "express"
import router from "./routes/atividades.js"
import cors from 'cors';


const app = express();

app.use(cors()); 



app.use(express.json()) // <- importante!
app.use('/atividades', router)

export default app
