import express from 'express'

import morgan from 'morgan';

import authRoutes from './routes/auth.routes.js';

import cookieParser from 'cookie-parser';

import taskRouter from './routes/task.routes.js';

const app = express ()

app.use(morgan('dev')); //peticiones
app.use(express.json()); // Json
app.use(cookieParser()); // Read Cookies
app.use("/api", authRoutes); 
app.use("/api", taskRouter); 

export default app; 


