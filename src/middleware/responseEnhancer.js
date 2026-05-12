// This module defines the responseEnhancer function, which is an Express.js middleware that enhances the response object by adding custom methods for sending standardized success and failure responses. It adds three methods to the response object: res.success for sending successful responses, res.fail for sending error responses, and res.created for sending responses when a resource is created. It also includes a res.noContent method for sending a 204 No Content response. This middleware allows for consistent response formatting across the application.

import { ApiResponse } from "../core/ApiResponse.js";

// This function is an Express.js middleware that enhances the response object by adding custom methods for sending standardized success and failure responses. It adds three methods to the response object: res.success for sending successful responses, res.fail for sending error responses, and res.created for sending responses when a resource is created. It also includes a res.noContent method for sending a 204 No Content response. This middleware allows for consistent response formatting across the application.
export const responseEnhancer = (req, res, next) => {
  res.success = function (data = null, message = "Success", statusCode = 200) {
    return res
      .status(statusCode)
      .json(new ApiResponse(statusCode, data, message));
  };

  res.fail = function (
    message = "Something went wrong",
    statusCode = 500,
    code = "REQUEST_FAILED",
    details = null,
  ) {
    const response = {
      success: false,
      message,
      code,
      timestamp: new Date().toISOString(),
    };

    if (details) {
      response.details = details;
    }

    return res.status(statusCode).json(response);
  };

  res.created = function (data = null, message = "Resource created") {
    return res.success(data, message, 201);
  };

  res.noContent = function () {
    return res.status(204).send();
  };

  next();
};
