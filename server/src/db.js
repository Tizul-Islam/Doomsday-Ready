import service from './service.mjs';

// The database client arrives through the service declaration — never from
// DATABASE_URL. Loaded once, at module level; the client connects lazily on
// first use.
const { db } = service.load();

export default db;
