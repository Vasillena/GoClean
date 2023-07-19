import { Link } from "react-router-dom";
import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

const RegisterFormKeys = {
  Email: "email",
  Password: "password",
  RepeatPassword: "repeatPassword",
};

export default function Register() {
  const { onRegisterSubmit } = useContext(AuthContext);
  // const { onRegisterSubmit } = useAuthContext;
  const { values, changeHandler, onSubmit } = useForm(
    {
      [RegisterFormKeys.Email]: "",
      [RegisterFormKeys.Password]: "",
      [RegisterFormKeys.RepeatPassword]: "",
    },
    onRegisterSubmit
  );

  return (
    <section className="register-section">
      <div className="forms">
        <div className="signup">
          <form method="POST" id="signup" onSubmit={onSubmit}>
            <h3>Sign up</h3>
            <input
              type="email"
              name={RegisterFormKeys.Email}
              placeholder="Email"
              value={values[RegisterFormKeys.Email]}
              onChange={changeHandler}
              required
            />
            <input
              type="password"
              name={RegisterFormKeys.Password}
              placeholder="Password"
              value={values[RegisterFormKeys.Password]}
              onChange={changeHandler}
              required
            />
            <input
              type="password"
              name={RegisterFormKeys.RepeatPassword}
              placeholder="Repeat Password"
              value={values[RegisterFormKeys.RepeatPassword]}
              onChange={changeHandler}
              required
            />
            <input type="submit" className="submit" defaultValue="Sign up" />
            <p>
              Already have an account?
              <br />
              <Link to="/login">Login here</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
