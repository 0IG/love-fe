import {useState} from "react";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase";
import { useNavigate } from "react-router-dom";

import "./Login.scss";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // navigate("/signup");
      });
  }

  console.log("hi")

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__title">LOGIN</div>
        <input className="login__inputUser" type="text" onChange={(e) => setEmail(e.target.value)}/>
        <input className="login__inputPasswrd" type="password" onChange={(e) => setPassword(e.target.value)}/>
        <button className="login__btnLogin" onClick={handleLogin}>LOGIN</button>
        <button className="login__btnRegister">CREATE NEW USER</button>
      </div>
    </div>
  )
}
