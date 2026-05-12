import ApiError from "../core/ApiError.js";

const errorHandler = (err, req, res, next) => {
  let error = err;

  if (!(error instanceof ApiError)) {
    error = new ApiError(
      500,
      error.message || "Internal Server Error",
      "INTERNAL_SERVER_ERROR"
    );
  }

  res.status(error.statusCode).json({
    success: error.success,
    message: error.message,
    code: error.code,
    details: error.details || null,
  });
};

export default errorHandler;