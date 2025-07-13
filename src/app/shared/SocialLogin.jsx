import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
import { useRouter } from "next/navigation";

const SocialLogin = () => {
    const { signInWithGoogle, singInWithGithub } = useContext(AuthContext);
    const router = useRouter();

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(res => {
                console.log(res.user);
                router.push('/')
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    const handleGithubSingIn = () => {
        singInWithGithub()
            .then(res => {
                console.log(res.user);
                router.push('/')
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    return (
        <div className="flex flex-col gap-y-3">
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-neutral text-lg"> <FcGoogle size={25} /> Signin with Google </button>

            <button onClick={handleGithubSingIn} className="btn btn-outline btn-neutral text-lg"> <IoLogoGithub size={25} /> Continue with GitHub </button>
        </div>
    );
};

export default SocialLogin;