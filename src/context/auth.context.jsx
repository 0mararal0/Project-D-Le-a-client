import { createContext, useEffect, useState } from "react";
import service from "../services/config";
import ClockLoader from "react-spinners/ClockLoader";

const AuthContext = createContext();

function AuthWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUserId, setLoggedUserId] = useState(null);
  const [isValidatingToken, setIsValidatingToken] = useState(true);
  const [photoProfile, setPhotoProfile] = useState();
  const [firstName, setFirstName] = useState();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    authenticateUser();
  }, []);

  const authenticateUser = async () => {
    try {
      const response = await service.get("/auth/verify");
      setIsValidatingToken(false);
      setIsLoggedIn(true);
      setLoggedUserId(response.data._id);
      setPhotoProfile(response.data.photo);
      setFirstName(response.data.firstName);

      if (response.data.role === "admin") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoggedIn(false);
      setLoggedUserId(null);
      setIsValidatingToken(false);
      setFirstName(null);
      setPhotoProfile(null);
      setIsAdmin(false);
    }
  };

  const passedContext = {
    isLoggedIn,
    loggedUserId,
    authenticateUser,
    isAdmin,
    photoProfile,
    setPhotoProfile,
    firstName,
  };

  if (isValidatingToken) {
    return <ClockLoader size={200} />;
  }

  return (
    <AuthContext.Provider value={passedContext}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthWrapper };
