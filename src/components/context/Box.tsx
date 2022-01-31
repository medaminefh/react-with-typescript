import { useContext } from "react";
import { ThemeContext } from "./UseContext";
import { UserContext } from "./AdvancedContext";

export const Box = () => {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme.primary.main,
        color: theme.primary.text,
      }}
    >
      Theme Context!
    </div>
  );
};

export const Box2 = () => {
  const state = useContext(UserContext);

  const handleLogin = () =>
    state?.setUser({ name: "medaminefh", email: "medaminefh@gmail.com" });

  const handleLogout = () => state.setUser(null);

  return (
    <>
      <div>
        Hello world! <br /> Name:{state.user?.name} <br /> Email:
        {state.user?.email}
      </div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};
