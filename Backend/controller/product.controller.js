import Product from '../model/product.model.js'
import ApiError from '../middleware/Error.middleware.js'
const saveProduct=(req,res)=>{
    try{
        const image = req.file.filename
        console.log(image,req.body)
        const {name,category,subcategory} = req.body;
        if(!name || !category || !subcategory){
            return next(new ApiError('All Field is required', 400))
        }
        

    }
    catch(err){
new ApiError(err.message,500)
    }
}

export {saveProduct}