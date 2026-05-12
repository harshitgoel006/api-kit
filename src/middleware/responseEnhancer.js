import ApiResponse from "../core/ApiResponse";

const responseEnhancer = (req, res, next) =>{

    res.success = (
        data = null,
        message = "Success",
        statusCode = 200
    ) => {
        return res 
        .status(statusCode)
        .json(new ApiResponse(statusCode, data, message));
    };

    res.created = (
        data = null,
        message = "Resource created"
    ) => {
        return res 
        .status(201)
        .json(new ApiResponse(201, data,  message));
    };

    res.noContent = () => {
        return res
        .status(204)
        .send();
    };

    next();

};

export default responseEnhancer;