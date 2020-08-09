import express from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes)

console.log('Server Initialized');
app.listen(3333);