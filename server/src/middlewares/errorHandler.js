/**
 * Centralized error handler middleware.
 * Ensures consistent error shapes and prevents leaking stack traces to clients in production.
 */
export function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || (res.statusCode !== 200 ? res.statusCode : 500);
  const errorCode = err.code || (statusCode === 409 ? 'CONFLICT' : 'INTERNAL_ERROR');

  const errorResponse = {
    success: false,
    error: {
      code: errorCode,
      message: err.message || 'An unexpected server error occurred.'
    }
  };

  if (err.details) {
    errorResponse.error.details = err.details;
  }

  if (process.env.NODE_ENV !== 'production' && err.stack) {
    errorResponse.error.stack = err.stack;
  }

  res.status(statusCode).json(errorResponse);
}

