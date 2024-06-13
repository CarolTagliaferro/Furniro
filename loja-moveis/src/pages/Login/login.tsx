import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  googleProvider,
  facebookProvider,
  auth,
} from "../../firebaseConection";
import { Classes } from "../../utils/tailwindPredefs";
import { useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const schema = z.object({
  email: z
    .string()
    .email("Invalid email format")
    .nonempty("Email cannot be empty"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormValues = z.infer<typeof schema>;

const Login: React.FC = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const handleEmailLogin: SubmitHandler<FormValues> = async (data) => {
    const { email, password } = data;
    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
        setSuccessMessage("Registration successful");
        setTimeout(() => setSuccessMessage(null), 4000);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("../../../../loja-moveis/src/pages/Home/home.tsx");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("../../../../loja-moveis/src/pages/Home/home.tsx");
    } catch (error) {
      console.error(error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      navigate("../../../../loja-moveis/src/pages/Home/home.tsx");
    } catch (error) {
      console.error(error);
    }
  };

  const toggleFormMode = () => {
    setIsRegistering(!isRegistering); //Pra definir se esta na pagina de login ou registro
    reset(); //Pra limpar o campo quando for de registro para login
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <img
        src="https://furniro-at.s3.amazonaws.com/HomeImages/scandinavian-interior-mockup-wall-decal-background+1.png"
        alt="Background Image"
        className="w-full h-full lg:w-full lg:h-full object-cover absolute inset-0 z-[-1] brightness-50 blur-sm"
      />
      <div className="p-8 bg-white rounded-md shadow-md lg:w-full max-w-md font-poppins">
        <h1 className="text-2xl font-bold mb-6">
          {isRegistering ? "Register" : "Login"}
        </h1>
        <form onSubmit={handleSubmit(handleEmailLogin)}>
          <div>
            <label htmlFor="email" className={Classes.labelLogin}>
              Email
              <input
                type="email"
                id="email"
                {...register("email")}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md`}
                placeholder="abc@mail.com"
                required
              />
            </label>
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="password" className={Classes.labelLogin}>
              Password
              <input
                type="password"
                id="password"
                {...register("password")}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-md`}
                placeholder="password"
                required
              />
            </label>
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full mt-3 mb-5 py-3 px-4 bg-primary text-white rounded-md hover:bg-primaryDark"
          >
            {isRegistering ? "Register" : "Login"}
          </button>
        </form>
        {successMessage && (
          <div className=" text-lg text-center bg-green-100 border border-green-600 text-green-700 px-4 py-3 rounded-md">
            {successMessage}
          </div>
        )}
        <div className="">
          <p className="text-center text-lg font-medium pt-3 text-grayTwo">
            Login With
          </p>
          <div className="flex gap-5 pt-3 justify-center">
            <FcGoogle
              onClick={handleGoogleLogin}
              className="w-10 h-10 cursor-pointer"
            ></FcGoogle>

            <FaFacebook
              onClick={handleFacebookLogin}
              className="w-9 h-9 text-blue-600 cursor-pointer"
            ></FaFacebook>
          </div>
        </div>
        <div className="mt-4 text-center">
          <button
            onClick={toggleFormMode}
            className="text-primary hover:underline"
          >
            {isRegistering
              ? "Already have an account? Login"
              : "Don't have an account? Register"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
