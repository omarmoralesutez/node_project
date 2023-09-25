import bodyParser from "body-parser";
import cors from 'cors';
import express, {Application} from "express";
const app: Application = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({
    origin: '*',
}));

app.use(express.json({limit: '50mb'}));

//App - Routes

export default app;