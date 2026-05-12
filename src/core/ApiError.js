// This class represents an error that can be thrown in the API. It extends the built-in Error class and adds additional properties such as statusCode, code, and details. This allows for more structured error handling in the API.

export class ApiError extends Error {

  constructor(
    statusCode = 500,
    message = "Something went wrong",
    code = "INTERNAL_SERVER_ERROR",
    details = null
  ) {

    super(message);

    this.name = this.constructor.name;

    this.statusCode = statusCode;

    this.success = false;

    this.code = code;

    this.details = details;

    Error.captureStackTrace(
      this,
      this.constructor
    );

  }

}