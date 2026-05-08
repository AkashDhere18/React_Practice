import React, { useState } from "react";
const FormValidation = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);

        if(email="" ){
            alert("empty fields")
        }

        setEmail("")
        setPassword("")
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={email} placeholder="Email" onChange={(e) =>
                    setEmail(e.target.value)} />
                <input type="password" valut={password} placeholder="Password" onChange={(e) =>
                    setPassword(e.target.value)} />
                < button type="submit" > Login</button >
            </form >
        </>
    );
};
export default FormValidation;