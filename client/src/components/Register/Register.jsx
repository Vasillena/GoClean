import { Link } from "react-router-dom";
import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";
import { validateInputs } from "../../utils/validateInputs";

// const RegisterFormKeys = {
//   Name: "username",
//   Email: "email",
//   Password: "password",
//   RepeatPassword: "repeatPassword",
// };

export default function Register() {
  const { onRegisterSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit, errors } = useForm(
    {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
      // [RegisterFormKeys.Name]: "",
      // [RegisterFormKeys.Email]: "",
      // [RegisterFormKeys.Password]: "",
      // [RegisterFormKeys.RepeatPassword]: "",
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
              name="name"
              // name={RegisterFormKeys.Name}
              placeholder="Name"
              // value={values[RegisterFormKeys.Name]}
              value={values.name}
              onChange={changeHandler}
              required
            />
            <input
              type="email"
              name="email"
              // name={RegisterFormKeys.Email}
              placeholder="Email"
              // value={values[RegisterFormKeys.Email]}
              value={values.email}
              onChange={changeHandler}
              required
            />
            <input
              type="password"
              name="password"
              // name={RegisterFormKeys.Password}
              placeholder="Password"
              // value={values[RegisterFormKeys.Password]}
              value={values.password}
              onChange={changeHandler}
              required
            />
            <input
              type="password"
              name="repeatPassword"
              // name={RegisterFormKeys.RepeatPassword}
              placeholder="Repeat Password"
              // value={values[RegisterFormKeys.RepeatPassword]}
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
