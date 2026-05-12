import { ApiResponse } from "../core/ApiResponse.js";

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
