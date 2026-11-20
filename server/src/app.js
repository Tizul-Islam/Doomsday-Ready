import express from 'express';
import cors from 'cors';
import { config } from './config/env.js';
import apiRouter from './routes/apiRouter.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();

// Configure CORS
app.use(cors({
  origin: config.clientOrigin,
  credentials: true
}));

// Body parsing middleware
app.use(express.json());

// Mount API router
app.use('/api', apiRouter);

// Catch 404 for unhandled API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({
    success: false,
    error: {
      code: 'NOT_FOUND',
      message: `Endpoint ${req.method} ${req.originalUrl} does not exist.`
    }
  });
});

// Centralized error handling
app.use(errorHandler);

export default app;

