import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: "abc Job1", title: "Developer", salary: "500" },
      { id: "abc Job2", title: "Testers", salary: "400" },
      { id: "abc Job3", title: "Project managers", salary: "1000" },
    ],
  };

  addNewJobs = (job) => {
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };

  deleteAJob = (job) => {
    let currenJobs = this.state.arrJobs;
    currenJobs = currenJobs.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currenJobs,
    });
  };

  /*
   * JSX => return block
   * grament
   */

  render() {
    console.log("Check render >>>: ", this.state);
    return (
      <>
        <AddComponent addNewJobs={this.addNewJobs} />
        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteAJob={this.deleteAJob}
        />
        {/* props: property */}
      </>
    );
  }
}

export default MyComponent;
