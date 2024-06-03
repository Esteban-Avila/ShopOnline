import { Outlet ,  Navigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthProvider";
import React from "react";
export default function protectedroutes(){
    const auth = useAuth()
    
    return auth.isAuthenticated ? <Outlet /> : <Navigate to="/" />

}