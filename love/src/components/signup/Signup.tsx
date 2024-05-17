import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import "./Signup.scss";

export default function signup() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSignup = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential: any) => {
        const user = userCredential.user;
        console.log("User:", user);
        console.log("User Created Successfully!")
        navigate("/");
      })
      .catch((error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Shit hit the fan")
        console.log('Testing fix')
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="signup">
      <div className="signup__container">
        <form className="signup__form" onSubmit={() => handleSignup}>
        <div className="signup__title">CREATE AN ACCOUNT</div>
        <input
          className="signup__inputUser"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="signup__inputPasswrd"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
          <button className="signup__btnRegister" type="submit" onClick={() => navigate(-1)}>BACK</button>
        </form>
      </div>
    </div>
  );
}
