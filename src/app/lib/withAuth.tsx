import { useRouter } from "next/navigation";
import { useEffect } from "react";

const withAuth = (Component: React.ComponentType) => {
  return function ProtectedRoute(props: any) {
    const router = useRouter();
    const isAuthenticated = false; // Replace with actual auth logic

    useEffect(() => {
      if (!isAuthenticated) {
        // router.replace("auth/login"); // Redirect to login page
      }
    }, [isAuthenticated, router]);

    // if (!isAuthenticated) return null; // Optionally show a loading spinner

    return <Component {...props} />;
  };
};

export default withAuth;
