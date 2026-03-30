import React,{useState,useEffect, use} from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Protected({children,authentication}){

  const navigate = useNavigate();
  const [loader,setLoader] = useState(true);
  const authStatus = useSelector((state)=>state.auth.status)

  useEffect(()=>{
    if(authentication && authStatus!==authentication){
      navigate("/login")
    }else if(!authentication && authStatus!==authentication){
      navigate("/")
    }
    setLoader(false)
  },[authStatus,navigate,authentication])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}