import { toast } from "react-toastify";
import axios from "../../api/axiosconfig";
import { loadproduct } from "../reducers/productSlice";

export const asyncloadproducts = () => async (dispatch, getState)=>{
    try{
        const {data} = await axios.get("/products");
        dispatch(loadproduct(data));

    }catch(err){
        console.log(err);
        
    }
}


export const asynccreateproduct = (product)=> async (dispatch, getState)=>{
    try{
        const res = await axios.post("/products", product);
        console.log(res);
        toast.success("Product created successfully!");
        dispatch(asyncloadproducts())

    }catch(err){
        console.log(err);
        
    }
}