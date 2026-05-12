// This module defines the ApiError class, which is used to standardize the structure of API errors across the application.

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