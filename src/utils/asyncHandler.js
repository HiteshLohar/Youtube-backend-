const asyncHandler = (requestHandler) => {
    (req,res,next) =>{
        Promise.resolve(requestHandler(req,res,next))
               .catch((err)=>{
                    console.log("Error in async handler : ",err);
                    next(err)
               })
    }
}