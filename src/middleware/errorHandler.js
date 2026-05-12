// This module defines the errorHandler function, which is an Express.js middleware for handling errors in a standardized way. It formats the error response to include details such as the success status, error message, error code, timestamp, and optionally the stack trace (in development mode) and any additional details provided in the error object. It also logs non-ApiError instances to the console for debugging purposes.

import { ApiError } from "../core/ApiError.js";


// This function is an Express.js error-handling middleware that catches errors thrown in the application and formats them into a standardized JSON response. It checks if the error is an instance of ApiError, and if not, it logs the error to the console. The response includes the success status, error message, error code, timestamp, and optionally the stack trace (in development mode) and any additional details provided in the error object.
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
