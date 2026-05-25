import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify'

const FormValidation = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        console.log(email, password);
        
        if(email==="" || password === ""){
                // toast.error("Empty fields")
                alert("Empty fields")
            }
            
            setEmail("")
            setPassword("")
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={email} placeholder="Email" onChange={(e) =>
                    setEmail(e.target.value)} />
                <input type="password" value={password} placeholder="Password" onChange={(e) =>
                    setPassword(e.target.value)} />
                < button type="submit" > Login</button >
            </form >
        </>
    );
};
export default FormValidation;