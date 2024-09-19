const NotFoundHandler = (req, res, next) => {
  try {
    return res.status(404).json({ error: "Path Not Found" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = NotFoundHandler;
