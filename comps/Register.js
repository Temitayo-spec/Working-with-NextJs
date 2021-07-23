import Link from "next/link";
import React from "react";
import Progress from "../comps/Progress";
import styles from "../styles/Home.module.css";

class Register extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    gender: "",
    errors: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  check = () => {
    const { firstname, lastname, email, username, gender } = this.state;
    let isValid = true;
    const errors = {};
    if (
      this.state.firstname === "" ||
      this.state.lastname === "" ||
      this.state.email === "" ||
      this.state.username === "" ||
      this.state.gender === ""
    ) {
      errors.passwordLength = "Fill in the text boxes";
      isValid = false;
    } else if (
      !this.state.email.includes("@") ||
      !this.state.email.includes(".")
    ) {
      errors.passwordLength = "Invalid Email Address";
      isValid = false;
    } else if (username.trim().length < 4) {
      errors.passwordLength = "Username must be a minimum of 6 characters";
      isValid = false;
    } else {
      window.location.href = "/registertwo";
    }
    this.setState({ errors });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const isValid = this.check();
    if (isValid) {
      this.setState({
        username: "",
        firstname: "",
        lastname: "",
        geder: "",
        email: "",
      });
    }
  };

  render() {
    const { username, errors, firstname, lastname, email, gender } = this.state;
    return (
      <div className={styles.register_container}>
        <Progress />

        <form onSubmit={this.onSubmit} className={styles.content}>
          <div className="first-row">
            <div className="firstname">
              <label htmlFor="">
                <h3>First Name</h3>
              </label>
              <input type="text" name="firstname" onChange={this.onChange} required />
            </div>

            <div className="lastname">
              <label htmlFor="">
                <h3>Last Name</h3>
              </label>
              <input type="text" name="lastname" onChange={this.onChange} required />
            </div>
          </div>
          <div className="email">
            <label htmlFor="">
              <h3>Email</h3>
            </label>
            <input type="text" name="email" onChange={this.onChange} required />
          </div>
          <div className="username">
            <label htmlFor="">
              <h3>Username</h3>
            </label>
            <input type="text" name="username" onChange={this.onChange} required />
          </div>

          <div className="custom-select">
            <label htmlFor="">
              <h3>Gender</h3>
            </label>
            <select required name="gender" onChange={this.onChange} className="select">
              <option value=""></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <br />

          {Object.keys(errors).map((key) => {
            return (
              <div style={{ color: "red" }} key={key}>
                {errors[key]}
              </div>
            );
          })}

          <button
            style={{
              marginTop: "50px",
              marginBottom: "10px",
            }}
            className="btn"
            type="submit"
          >
            Next
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

export default Register;
