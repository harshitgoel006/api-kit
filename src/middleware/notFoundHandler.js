export const notFoundHandler = (req, res, next) => {
  return res.status(404).json({
    
    success: false,
    message: `Route ${req.originalUrl} not found`,
    code: "ROUTE_NOT_FOUND",
    timestamp: new Date().toISOString(),

  });
};
