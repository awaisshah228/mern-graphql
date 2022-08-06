// import path from 'path';
import express from 'express';
// import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
// import helmet from 'helmet';


const app = express();
// const isDevelopment = process.env.Node === 'development'

//   app.use(
//     helmet({
//       crossOriginEmbedderPolicy: !isDevelopment,
//       contentSecurityPolicy: !isDevelopment,
//     })
//   )
// app.use(helmet());

// app.use(cors({
//   origin: 'http://localhost:3000',
// }));
app.use(morgan('combined'));
app.use(express.json());
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, '..', 'public')));

// app.use('/v1', import('./routes'));


// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
// });
export default app;


