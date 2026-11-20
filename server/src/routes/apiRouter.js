import { Router } from 'express';

const apiRouter = Router();

/**
 * Health check endpoint
 * GET /api/health
 */
apiRouter.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      status: 'ok',
      service: 'Doomsday Ready API',
      timestamp: new Date().toISOString()
    }
  });
});

export default apiRouter;

