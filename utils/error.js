const errorHandler = (statusCode, message) => {
  const error = new Error(message); // Set the message in the Error constructor
  error.statusCode = statusCode;
  return error;
};

module.exports = errorHandler;