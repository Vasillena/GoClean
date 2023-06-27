import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <section className="register-section">
      <div className="forms">
        <div className="signup">
          <form method="POST" id="signup">
            <h3>Sign up</h3>
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <input
              type="password"
              name="repeatPassword"
              placeholder="Repeat Password"
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
