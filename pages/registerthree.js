import progress from "../styles/Progress.module.css";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import React from "react";
class Registerthree extends React.Component {
  state = {
    disabled: true,
    currentSemester: "",
    currentCgpa: "",
    desiredCgpa: "",
    errors: "",
  };


  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  check = () => {
    const { currentSemester, currentCgpa, desiredCgpa } = this.state;
    let isValid = true;
    const errors = {};
    if (
      this.state.currentCgpa === "" ||
      this.state.currentSemester === "" ||
      this.state.desiredCgpa === ""
    ) {
      errors.passwordLength = "Fill in the text boxes";
      isValid = false;
    } else {
      window.location.href = "/registerfour";
    }
    this.setState({ errors });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const isValid = this.check();
    if (isValid) {
      this.setState({ currentCgpa: "", currentSemester: "", desiredCgpa: "" });
    }
  };
  render() {
    const { currentSemester, currentCgpa, desiredCgpa, errors } = this.state;
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
                <div className="circle circle-disabled">
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
                <h3>Current Semester</h3>
              </label>
              <input
                type="text"
                name="currentSemester"
                onChange={this.onChange}
                required
              />
            </div>
          </div>
          <div className={"email"}>
            <label htmlFor="">
              <h3>Current CGPA</h3>
            </label>
            <input type="text" name="currentCgpa" onChange={this.onChange} required />
          </div>
          <div className="username">
            <label htmlFor="">
              <h3>Desired CGPA</h3>
            </label>
            <input
              type="text"
              name="desiredCgpa"
              onChange={this.onChange}
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

          {/* <Link href="/registerfour">
            <a> */}
          <button
            // disabled={this.state.disabled}
            style={{
              marginTop: "50px",
              marginBottom: "10px",
            }}
            className="btn"
            type="submit"
          >
            Next
          </button>
          {/* </a>
          </Link> */}
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

export default Registerthree;
