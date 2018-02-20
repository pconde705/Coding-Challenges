import {connect} from 'react-redux';
import TaskList from './task_list.jsx';
import {getTasks} from  '../actions/task_actions';
import {getProject} from  '../actions/project_actions';

const mapStateToProps = state => {
  return {
    projectErrors: state.errors.project.errors,
    taskErrors: state.errors.task.errors,
    tasks: state.tasks.data,
    project: state.project
}};

const mapDispatchToProps = dispatch => ({
  getTasks: (project_id, asana_token) => dispatch(getTasks(project_id, asana_token)),
  getProject: (project_id, asana_token) => dispatch(getProject(project_id, asana_token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
