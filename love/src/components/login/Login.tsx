import "./Login.scss";
export default function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__title">LOGIN</div>
        <input className="login__inputUser" type="text" />
        <input className="login__inputPasswrd" type="password" />
        <button className="login__btnLogin">LOGIN</button>
        <button className="login__btnRegister">CREATE NEW USER</button>
      </div>
    </div>
  )
}
