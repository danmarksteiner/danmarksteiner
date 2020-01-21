import React, { Component } from 'react';
import { withRouter } from 'react-router';
class Project extends Component {
  /**
   * @method constructor
   * @param {object} props - Component props.
   * @returns {undefined}
   */
  constructor(props) {
    super(props);
    this.state = {
      projects: null
    };
  }
  renderContent() {
    const currentProjectUrl = this.props.location.pathname.substring(
      this.props.location.pathname.lastIndexOf('/') + 1
    );
    let matchedProject;
    if (this.props.projects) {
      const { projects } = this.props;
      matchedProject = projects.data.items.filter(
        currentProject =>
          currentProject.fields.canonicalUrl === currentProjectUrl
      );
      return <h1>{matchedProject[0].fields.projectName}</h1>;
    }
    return <div>Loading</div>;
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}
export default withRouter(Project);
