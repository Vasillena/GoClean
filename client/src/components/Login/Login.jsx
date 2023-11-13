import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

const LoginFormKeys = {
  Email: "email",
  Password: "password",
};

export default function Login() {
  const { onLoginSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm(
    {
      [LoginFormKeys.Email]: "",
      [LoginFormKeys.Password]: "",
    },
    onLoginSubmit
  );

  return (
    <section className="login-section">
      <div className="forms">
        <div className="login">
          <form method="POST" id="login" onSubmit={onSubmit}>
            <h3>Login</h3>
            <input
              type="email"
              name={LoginFormKeys.Email}
              placeholder="Email"
              value={values[LoginFormKeys.Email]}
              onChange={changeHandler}
              required
            />
            <input
              type="password"
              name={LoginFormKeys.Password}
              placeholder="Password"
              value={values[LoginFormKeys.Password]}
              onChange={changeHandler}
              required
            />
            <input type="submit" className="submit" defaultValue="Login" />
            <p className="no-account">
              Not have an account?
              <br /> <Link to="/register">Register here</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
