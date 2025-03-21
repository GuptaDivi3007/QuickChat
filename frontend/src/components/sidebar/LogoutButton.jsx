import { CiLogout } from "react-icons/ci";
import useLogOut from "../../hooks/useLogOut";
const LogoutButton = () => {
    const { loading, logout } = useLogOut();
    return (
        <div className="mt-auto">
            {!loading ? (
                <CiLogout
                    className="w-6 h-6 text-white cursor-pointer"
                    onClick={logout}
                />
            ) : (
                <span className="loding loading-spinner"></span>
            )}
        </div>
    );
};

export default LogoutButton;
