// This module defines the ApiResponse class, which is used to standardize the structure of API responses across the application.

export class ApiResponse {

  constructor(
    statusCode = 200,
    data = null,
    message = "Success"
  ) {

    this.success = true;
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.timestamp = new Date().toISOString();

  }

}