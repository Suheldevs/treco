function ApiError(message, statusCode) {
    const error = new Error(message);
    error.statusCode = statusCode;
    return error;
  }
  
  export default ApiError;
  