export default (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      error: error.message
    });
  }
};
