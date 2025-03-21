import { useState } from "react"
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogIn = () => {
    const [loading,setLoading] = useState(false);

    const {setAuthUser} = useAuthContext();

    const login =async({username,password})=>{
        const success = handleInputError({username,password});
        if(!success) return;

        setLoading(true);
        try {
            const res = await fetch("/api/auth/login",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({username,password})
            });
            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }

            localStorage.setItem("chat-user",JSON.stringify(data))

            setAuthUser(data)

        } catch (error) {
            toast.error(error.message);
            console.log(error);
        }finally{
            setLoading(false);
        }
    }
    return {loading,login}
}

export default useLogIn

const handleInputError=({username,password})=>{
    if(!username || !password){
        toast.error("please fill all input fields");
        return false;
    }
    return true;
}