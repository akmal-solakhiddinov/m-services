import express from 'express';
import { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import router from './routes/index.route';

const PORT = process.env.PORT || 4000;

const app = express();

app.use(
  cors({
    origin: ['http://localhost:5173'],
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'HELLO WORLD' });
});

app.use('/api/v-1/',   router);

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error('Global Error Handler:', err);
  const status = err instanceof Error && 'status' in err ? (err as any).status : 500;
  const message = err instanceof Error ? err.message : 'Internal Server Error';
  res.status(status).json({ error: message });
});


app.listen(PORT, () => {
  console.log('User service running on port: ', PORT);
});
