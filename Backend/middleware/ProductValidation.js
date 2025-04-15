import ApiError from '../middleware/Error.middleware.js';

const ProductValidation = async (req, res, next) => {
  try {
    const { name, category, subCategory } = req.body;

    if (!name || !category || !subCategory) {
      return next(new ApiError('All fields are required', 400));
    }

    next();
  } catch (err) {
    next(new ApiError(err.message, 500));
  }
};

export default ProductValidation;
