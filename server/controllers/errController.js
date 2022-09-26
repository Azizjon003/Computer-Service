const ErrController = (err, req, res, next) => {
  err.statusCode = err.statusCode || 404;
  err.status = err.status || "fail";
  err.message = err.message || "Page is not defined";

  if (process.env.NODE_ENV == "DEVELOPMENT") {
    res.status(err.statusCode).json({
      error: err,
      status: err.status,
      message: err.message,
    });
  } else {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }
  next();
};

module.exports = ErrController;
