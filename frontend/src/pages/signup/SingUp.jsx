import { useState } from "react";
import GenderBox from "./GenderBox";
import { Link } from "react-router-dom";
import UseSignUp from "../../hooks/useSignUp";
const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });

    const { loading, signup } = UseSignUp();

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    };
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="h-full p-6 w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-1 border-green-800">
                <h1 className="'text-3xl font-semibold text-center text-gray-100">
                    SignUp <span className="text-green-500"> Chat App</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div className="mt-1.5">
                        <label className="lable p-2">
                            <span className="text-base lable-text">
                                Fullname
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter fullname"
                            className="input input-bordered w-full max-w-xs placeholder:text-green-500"
                            value={inputs.fullName}
                            onChange={(e) => {
                                setInputs({
                                    ...inputs,
                                    fullName: e.target.value,
                                });
                            }}
                        />
                    </div>
                    <div className="mt-1.5">
                        <label className="lable p-2">
                            <span className="text-base lable-text">
                                Username
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter username"
                            className="input input-bordered w-full max-w-xs placeholder:text-green-500"
                            value={inputs.username}
                            onChange={(e) =>
                                setInputs({
                                    ...inputs,
                                    username: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="mt-1.5">
                        <label className="lable p-2">
                            <span className="text-base lable-text">
                                Password
                            </span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="input input-bordered w-full max-w-xs placeholder:text-green-500"
                            value={inputs.password}
                            onChange={(e) =>
                                setInputs({
                                    ...inputs,
                                    password: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="mt-1.5">
                        <label className="lable p-2">
                            <span className="text-base lable-text">
                                Confirm Password
                            </span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="input input-bordered w-full max-w-xs placeholder:text-green-500"
                            value={inputs.confirmPassword}
                            onChange={(e) =>
                                setInputs({
                                    ...inputs,
                                    confirmPassword: e.target.value,
                                })
                            }
                        />
                    </div>
                    <GenderBox
                        onCheckboxChange={handleCheckboxChange}
                        selectedGender={inputs.gender}
                    />

                    <Link
                        to="/login"
                        className="text-sm  hover:underline hover:text-green-600 mt-2 inline-block"
                    >
                        Already have an account?
                    </Link>

                    <div>
                        <button
                            className="btn btn-block btn-sm mt-2"
                            disabled={loading}
                        >
                            {loading ? (
                                <span className="loading loading-spinner"></span>
                            ) : (
                                "Sign Up"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
