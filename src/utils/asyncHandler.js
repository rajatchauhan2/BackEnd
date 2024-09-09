// const asyncHandler = (func) =>async(req,res,next)=>{
//     try {
//         await func(req,res,next)

import { request } from "express"

        
//     } 
//     catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }


const asyncHandler = (requestHandler) => async (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next))
    .catch(err => next(err));
}


export{asyncHandler}