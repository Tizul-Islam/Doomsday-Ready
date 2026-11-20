import app from './app.js';
import { config } from './config/env.js';

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`[Doomsday Ready Server] Running on http://localhost:${PORT}`);
  console.log(`[Doomsday Ready Server] Health check available at http://localhost:${PORT}/api/health`);
});

