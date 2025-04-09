import ApiError from '../middleware/Error.middleware.js'
const ProductValidation = async(req,res,next)=>{
    try{
        const {name,category,subcategory} = req.body;
        if(!name || !category || !subcategory){
            return next(ApiError('All Field is required', 400))
        }
        next()
    }
    catch(err){
        next(ApiError(err.message, 500)); 
    }
}

export default ProductValidation