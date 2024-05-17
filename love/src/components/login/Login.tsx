import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import "./Login.scss";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential: any) => {
        const user = userCredential.user;
        console.log("User:", user);
        navigate("/");
      })
      .catch((error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        navigate("/signup");
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__title">LOGIN</div>
        <input
          className="login__inputUser"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="login__inputPasswrd"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login__btnLogin" onClick={handleLogin}>
          LOGIN
        </button>
        <Link to="/signup" className="login__link">
          <button className="login__btnRegister">CREATE ACCOUNT</button>
        </Link>
      </div>
    </div>
  );
}
