import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const UseSignUp = () => {
    const [loading, setLoading] = useState();

    const { setAuthUser } = useAuthContext();

    const signup = async ({
        fullName,
        username,
        password,
        confirmPassword,
        gender,
    }) => {
        const success = handelInputError({
            fullName,
            username,
            password,
            confirmPassword,
            gender,
        });
        if (!success) {
            return;
        }
        setLoading(true);
        try {
            console.log(password, confirmPassword);

            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullName,
                    username,
                    password,
                    confirmPassword,
                    gender,
                }),
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            localStorage.setItem("chat-user", JSON.stringify(data));

            setAuthUser(data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, signup };
};

export default UseSignUp;

const handelInputError = ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
}) => {
    console.log({
        fullName,
        username,
        password,
        confirmPassword,
        gender,
    });

    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error("please fill in all the fields");
        return false;
    }

    if (password !== confirmPassword) {
        toast.error("password don't match");
        return false;
    }
    if (password.length < 6) {
        toast.error("password length must be 8 or more");
        return false;
    }
    return true;
};
