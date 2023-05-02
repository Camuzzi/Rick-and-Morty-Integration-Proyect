import {useState} from "react";

import {validate} from "../../utils/validation";

// import "./login.css";

function Login({login}) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: " ",
    password: " ",
  });

  function handleChange(e) {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...user,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    login(user);
  }

  return (
    <div className="form-container">
      <div className="form-title">
        <h1>Fill Your Credentials</h1>
      </div>
      <form type="submit">
        <div className="credentials">
          <label>Username</label>
          <input
            onChange={handleChange}
            placeholder="wubalubadubdub@flarg.com"
            name="email"
            value={user.email}
          />
          {errors.email ? <span>{errors.email}</span> : null}
        </div>
        <div className="credentials">
          <label>Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={user.password}
          />
          {errors.password ? <span>{errors.password}</span> : null}
        </div>
        <button className="submit-btn" onClick={handleSubmit}>
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default Login;