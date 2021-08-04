import express from 'express';
import { UserRouter } from './routes/UserRoutes';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(UserRouter);

app.listen(3001, () => console.log('running...'));