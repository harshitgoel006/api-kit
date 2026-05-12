// This module defines the notFoundHandler function, which is an Express.js middleware for handling 404 Not Found errors. It returns a standardized JSON response indicating that the requested route was not found, including the original URL, an error code, and a timestamp.

export const notFoundHandler = (req, res, next) => {
  return res.status(404).json({
    
    success: false,
    message: `Route ${req.originalUrl} not found`,
    code: "ROUTE_NOT_FOUND",
    timestamp: new Date().toISOString(),

  });
};
