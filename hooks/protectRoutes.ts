import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const useProtectedRoute = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
  }

  if (status === "authenticated" && router.pathname === "/") {
    router.push("/dashboard");
  }

  if (status === "unauthenticated" && router.pathname !== "/") {
    router.push("/");
  }
};

export default useProtectedRoute;
