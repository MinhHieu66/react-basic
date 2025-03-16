import React from "react";
import AddComponent from "./AddComponent";
import "./Demo.scss";

class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };

  handleShowHie = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  handleOnclickDelete = (job) => {
    console.log(">>> handleOnclickDelete: ", job);
    this.props.deleteAJob(job);
  };

  render() {
    let { arrJobs } = this.props;
    let { showJobs } = this.state;
    let check = showJobs === true ? "showJobs = true" : "showJobs = false";
    console.log("Check conditional: ", check);
    return (
      <>
        {showJobs === false ? (
          <div>
            <button className="btn-show" onClick={() => this.handleShowHie()}>
              Show
            </button>
          </div>
        ) : (
          <>
            <div className="job-lists">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary} <></>
                    <span onClick={() => this.handleOnclickDelete(item)}>
                      x
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHie()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

// const ChildComponent = (props) => {
//   let { arrJobs } = props;
//   return (
//     <div className="job-lists">
//       {arrJobs.map((item, index) => {
//         if (item.salary >= 500) {
//           return (
//             <div key={item.id}>
//               {item.title} - {item.salary} $
//             </div>
//           );
//         }
//       })}
//     </div>
//   );
// };

export default ChildComponent;
