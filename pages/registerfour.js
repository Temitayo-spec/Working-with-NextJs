import progress from "../styles/Progress.module.css";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import React from "react";
class Registerfour extends React.Component {
  state = {
    password: "",
    errors: "",
    confirmPassword: "",
  };

  validate = () => {
    const { password, confirmPassword } = this.state;
    let isValid = true;
    const errors = {};
    if (password.trim().length < 6) {
      errors.passwordLength = "Password must be of 6 characters or higher";
      isValid = false;
    }else if (this.state.password !== this.state.confirmPassword) {
      errors.passwordLength = "Password Mismatch";
      isValid = false;
    } else {
      window.location.href = "/signUp";
    }
    this.setState({ errors });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeTwo = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.setState({ password: "", confirmPassword: "" });
    }
  };

  render() {
    const { password, errors, confirmPassword } = this.state;
    return (
      <div className={styles.register_container}>
        <div className={progress.wrapper}>
          <header className="title">
            <div className={progress.header}>
              <img src="/image-2.png" />
              <h1>Learnovate</h1>
            </div>
          </header>
          <div className="progress_container">
            <div className={progress.progress_container}>
              <div className="line line1">
                <div className="circle circle-disabled active">
                  <p>1</p>
                </div>
                <h3>Personal information</h3>
              </div>

              <div className="line line2">
                <div className="circle circle-disabled active">
                  <p>2</p>
                </div>
                <h3>School Information</h3>
                <div className="divider_line divider_line-active"></div>
              </div>

              <div className="line line2">
                <div className="circle circle-disabled active">
                  <p>3</p>
                </div>
                <h3>Grades Information</h3>
                <div className="divider_line divider_line-active"></div>
              </div>
              <div className="line line3">
                <div className="circle circle-disabled active">
                  <p>4</p>
                </div>
                <h3>Secure Your Account</h3>
                <div className="divider_line divider_line-active"></div>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={this.onSubmit} className={styles.content}>
          <div className={progress.row1}>
            <div className="firstname">
              <label htmlFor="">
                <h3>Password</h3>
              </label>
              <input
                type="password"
                name="password"
                onChange={this.onChange}
                value={password}
                required
              />
            </div>
          </div>
          <div className="email">
            <label htmlFor="">
              <h3>Confirm Password</h3>
            </label>
            <input
              type="password"
              name="confirmPassword"
              onChange={this.onChangeTwo}
              value={confirmPassword}
              required
            />
          </div>

          {Object.keys(errors).map((key) => {
            return (
              <div style={{ color: "red" }} key={key}>
                {errors[key]}
              </div>
            );
          })}

          <button
            style={{
              marginTop: "150px",
              marginBottom: "10px",
            }}
            className="btn"
            type="submit"
          >
            {/* <Link href="/signUp"> */}
            <a style={{ color: "white", transition: "all 0.4s ease-in-out" }}>
              Next
            </a>
            {/* </Link> */}
          </button>

          <p className={styles.sign_in}>
            <span>
              <Link href="/signin">Have an account? Sign In</Link>
            </span>
          </p>
        </form>
      </div>
    );
  }
}

export default Registerfour;
