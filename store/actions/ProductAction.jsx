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

export const asyncupdateproduct = (id,product) => async (dispatch, getState) => {
    try {
        await axios.patch(`/products/`+ id, product);
        toast.success("Product updated successfully!");
        dispatch(asyncloadproducts());
    } catch (err) {
        console.log(err);
    }
}

export const asyncdeleteproduct = (id) => async (dispatch, getState) => {
    try {
        await axios.delete(`/products/` + id);
        toast.success("Product deleted successfully!");
        dispatch(asyncloadproducts());
    } catch (err) {
        console.log(err);
    }
}