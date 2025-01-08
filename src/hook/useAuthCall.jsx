import React from "react";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, registerSucces } from "../features/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Custom hook yazma kuralları
  //? 1-use Kelimesi ile başlar
  //? 2- return de { fonksiyonlar }, değişkense [ bilgiler ] gönderilmeli
  //? 3-Çağrılacağı noktada
  //? const {register}=useAuthCall()

  const register = async (userInfo) => {
    dispatch(fetchStart());

    try {
      const { data } = await axios.post(
        "https://11103.fullstack.clarusway.com/users",
        userInfo
      );

      console.log("register icinde", data);
      dispatch(registerSucces(data));
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  const login = async (userInfo) => {
    dispatch(fetchStart());

    try {
      const { data } = await axios.post(
        "https://11103.fullstack.clarusway.com/auth/login",
        userInfo
      );

      console.log("login icinde", data);
      dispatch(loginSucces(data));
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { register, login };
};

export default useAuthCall;
