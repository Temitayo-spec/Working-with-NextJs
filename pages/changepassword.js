import progress from "../styles/Progress.module.css";
import styles from "../styles/Home.module.css";
import React from "react";
class changepassword extends React.Component {
  state = {
    newpassword: "",
    errors: "",
    confirmPassword: "",
  };

  validate = () => {
    const { newpassword, confirmPassword } = this.state;
    let isValid = true;
    const errors = {};
    if (newpassword.trim().length < 6) {
      errors.passwordLength = "Password must be of 6 characters or higher";
      isValid = false;
    } else if (this.state.newpassword !== this.state.confirmPassword) {
      errors.passwordLength = "Password Mismatch";
      isValid = false;
    } else {
      window.location.href = "/signin";
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
      this.setState({ newpassword: "", confirmPassword: "" });
    }
  };

  render() {
    const { newpassword, errors, confirmPassword } = this.state;
    return (
      <div className={styles.register_container}>
        <div className={progress.cover}>
          <header className={progress.title}>
            <div className={progress.header}>
              <img src="/image-2.png" />
              <h1>Learnovate</h1>
            </div>

            <div className="text">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
                commodi placeat ipsam possimus earum ut quia explicabo minus
                sapiente labore, doloribus laboriosam autem aliquid.
              </p>
            </div>
          </header>
        </div>

        <form onSubmit={this.onSubmit} className={styles.container}>
          <div className={progress.row1}>
            <div className="firstname">
              <label htmlFor="">
                <h3>New Password</h3>
              </label>
              <input
                type="password"
                name="newpassword"
                onChange={this.onChange}
                value={newpassword}
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
            <a style={{ color: "white", transition: "all 0.4s ease-in-out" }}>
              Reset Password
            </a>
          </button>
        </form>
      </div>
    );
  }
}

export default changepassword;
