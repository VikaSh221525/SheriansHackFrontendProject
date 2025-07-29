import axios  from "../../api/axiosconfig";
import { loaduser } from "./UserSlice";

export const asyncgetUsers = ()=> async(dispatch, getState)=>{
    // console.log("current state", getState());
    
    try{
        const res = await axios.get('/users');
        dispatch(loaduser(res.data));
    }catch(err){
        console.log(err);
    }
}