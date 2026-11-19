import app from './app.js';
import service from './service.mjs';
import db from './db.js';

const PORT = service.port();

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[Doomsday Ready Server] Running on http://localhost:${PORT}`);
  console.log(`[Doomsday Ready Server] Health check available at http://localhost:${PORT}/api/health`);
});
