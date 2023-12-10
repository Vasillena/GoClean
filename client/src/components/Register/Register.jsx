import { Link } from "react-router-dom";
import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";
import { validateInputs } from "../../utils/validateInputs";

export default function Register() {
  const { onRegisterSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit, errors } = useForm(
    {
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    onRegisterSubmit,
    validateInputs
  );

  return (
    <section className="register-section">
      <div className="forms">
        <div className="signup">
          <form
            method="POST"
            id="signup"
            onSubmit={(e) => onSubmit(e, validateInputs)}
          >
            <h3>Sign up</h3>
            <input
              type="text"
              name="username"
              placeholder="Name"
              value={values.username}
              onChange={changeHandler}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={changeHandler}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={changeHandler}
              required
            />
            <input
              type="password"
              name="repeatPassword"
              placeholder="Repeat Password"
              value={values.repeatPassword}
              onChange={changeHandler}
              required
            />
            {errors.passwordMatch && (
              <p className="form-error">{errors.passwordMatch}</p>
            )}
            <input type="submit" className="submit" defaultValue="Sign up" />
            <p className="no-account">
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
