import React, { useState, use, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { Mail, Lock, LogIn, ArrowRight, User, EyeOff, Eye } from "lucide-react";
import {
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const Login = () => {
  const emailRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { SignIn, setUser } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const handleLogin = () => {
    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }

    setIsLoading(true);
    SignIn(email, password)
      .then(() => {
        toast.success("User Login Successfully!");
        navigate("/");
      })
      .catch(() => {
        toast.error("Login Failed!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const provider = new GoogleAuthProvider();
  const SignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        toast.success("User loign successfull!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success(
          "A password reset email is send. Please Check your email!"
        );
      })
      .catch(() => {
        toast.error("Email field empy or Something error!");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1c2229] to-[#0f1316] flex flex-col items-center justify-center p-4">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="flex justify-center mb-6">
          <div className="h-12 w-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/20">
            <User className="h-6 w-6 text-white" />
          </div>
        </div>

        <div className="bg-[#0f1316]/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-800/50 overflow-hidden">
          <div className="px-8 pt-8 pb-4">
            <h1 className="text-3xl font-bold text-white text-center mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-400 text-center text-sm">
              Sign in to your account to continue
            </p>
          </div>

          <div className="p-8 pt-4">
            <div className="space-y-5">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-300 flex items-center gap-2"
                >
                  <Mail className="h-4 w-4 text-green-500" />
                  Email Address
                </label>
                <div className="relative">
                  <input
                    ref={emailRef}
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full py-3 px-4 rounded-xl outline-none bg-[#1c2229] text-white text-sm border border-gray-700/50 focus:border-green-500/50 transition-all duration-200 focus:ring-2 focus:ring-green-500/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-300 flex items-center gap-2"
                  >
                    <Lock className="h-4 w-4 text-green-500" />
                    Password
                  </label>
                  <p
                    onClick={handleForgetPassword}
                    className="text-green-500 cursor-pointer hover:text-green-400 text-xs font-medium transition-colors"
                  >
                    Forgot Password?
                  </p>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    placeholder="Create a strong password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full py-3 px-4 rounded-xl outline-none bg-[#1c2229] text-white text-sm border border-gray-700/50 focus:border-green-500/50 transition-all duration-200 focus:ring-2 focus:ring-green-500/20 pr-12"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-500 transition-colors p-1"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <button
                onClick={handleLogin}
                disabled={isLoading}
                className="w-full cursor-pointer py-3 px-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium transition-all duration-200 shadow-lg shadow-green-500/20 hover:shadow-green-500/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <LogIn className="h-5 w-5" />
                    Sign In
                  </>
                )}
              </button>

              <div className="relative flex items-center gap-2 py-4">
                <div className="flex-grow h-px bg-gray-700/50"></div>
                <span className="text-xs font-medium text-gray-400">
                  OR CONTINUE WITH
                </span>
                <div className="flex-grow h-px bg-gray-700/50"></div>
              </div>

              <button
                onClick={SignInWithGoogle}
                className="cursor-pointer w-full py-3 px-4 rounded-xl border border-gray-700 hover:border-gray-600 bg-[#1c2229]/50 text-white font-medium transition-all duration-200 flex items-center justify-center gap-2"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Login with Google
              </button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                Don't have an account?{" "}
                <Link
                  to="/auth/sign-up"
                  className="text-green-500 hover:text-green-400 font-medium transition-colors inline-flex items-center gap-1"
                >
                  Sign up <ArrowRight className="h-3 w-3" />
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Jobify. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
