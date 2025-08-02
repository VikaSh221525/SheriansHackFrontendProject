import { useDispatch } from 'react-redux';
import axios from '../../api/axiosconfig'
import { toast } from 'react-toastify';
import { loaduser } from '../reducers/UserSlice';

export const asyncregisteruser = (user) => async (dispatch, getState) => {
    try {
        const res = await axios.post("/users", user);
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}

export const asyncloginuser = (user) => async () => {
    try {
        const { data } = await axios.get(`/users?email=${user.email}&password=${user.password}`);
        localStorage.setItem("user", JSON.stringify(data[0]));

    } catch (err) {
        console.log(err);

    }
}
export const asynclogoutuser = (user) => async (dispatch, getState) => {
    try {

        localStorage.removeItem("user");
        dispatch(removeuser());
        toast.success("Logout successful!");

    } catch (err) {
        console.log(err);
    }
}
export const asynccurrentuser = () => async (dispatch, getState) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        user ? dispatch(loaduser(user)) : toast.info("User not logged in")

    } catch (err) {
        console.log(err);
    }
}