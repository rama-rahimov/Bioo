import express from 'express';
import bodyParser from 'body-parser';
import admin from './routes/admin.js';

const app = express();
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use('/admin', admin);

app.listen(3001, () => console.log('vpereed'));
