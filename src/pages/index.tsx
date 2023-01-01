import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
import Login from "../components/auth/Login";
import ForgotPasswordForm from "../components/auth/ForgotPassword";
import { useState } from "react";
const Home: NextPage = () => {
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  return (
    <>
      {isForgotPassword ? (
        <ForgotPasswordForm setIsForgotPassword={setIsForgotPassword} />
      ) : (
        <Login setIsForgotPassword={setIsForgotPassword} />
      )}
    </>
  );
};

export default Home;