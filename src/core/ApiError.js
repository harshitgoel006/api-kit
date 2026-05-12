class ApiError extends Error {
  constructor(
    statusCode = 500,
    message = "Something went wrong",
    code = "INTERNAL_SERVER_ERROR",
    details = null
  ) {
    super(message);

    this.name = "ApiError";

    this.statusCode = statusCode;
    this.success = false;
    this.code = code;
    this.details = details;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default ApiError;