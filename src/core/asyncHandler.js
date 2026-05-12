// This module defines the asyncHandler function, which is a higher-order function that wraps asynchronous request handlers in Express.js. It allows for proper error handling by catching any errors that occur within the asynchronous function and passing them to the next middleware (usually an error-handling middleware). This helps to avoid unhandled promise rejections and ensures that errors are properly propagated through the Express.js middleware chain.

export const asyncHandler = (requestHandler) => {
  return async (req, res, next) => {
    try {
      await requestHandler(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
