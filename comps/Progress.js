import progress from "../styles/Progress.module.css";


export default function Progress() {
  return (
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
            {/* <div className="divider_line"></div> */}
          </div>

          <div className="line line2">
            <div className="circle circle-disabled">
              <p>2</p>
            </div>
            <h3>School Information</h3>
            <div className="divider_line divider_line-active"></div>
          </div>

          <div className="line line2">
            <div className="circle circle-disabled">
              <p>3</p>
            </div>
            <h3>Grades Information</h3>
            {/* <div className="divider_line"></div> */}
          </div>
          <div className="line line3">
            <div className="circle circle-disabled">
              <p>4</p>
            </div>
            <h3>Secure Your Account</h3>
            {/* <div className="divider_line"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

// const Progress = () => {

//   return (

//   );
// };

// export default Progress;
