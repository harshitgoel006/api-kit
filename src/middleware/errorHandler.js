import { ApiError } from "../core/ApiError.js";

export const errorHandler = (err, req, res, next) => {
  
  const isDevelopment = process.env.NODE_ENV !== "production";
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  const code = err.code || "INTERNAL_SERVER_ERROR";

  const response = {
    success: false,
    message,
    code,
    timestamp: new Date().toISOString(),
  };

  if (err.details) {
    response.details = err.details;
  }

  if (isDevelopment) {
    response.stack = err.stack;
  }

  if (!(err instanceof ApiError)) {
    console.error(err);
  }

  return res.status(statusCode).json(response);
};
