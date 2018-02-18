import {connect} from 'react-redux';
import TaskList from './task_list.jsx';
import {getTasks} from  '../actions/task_actions';

const mapStateToProps = state => {
  return {

}};

const mapDispatchToProps = dispatch => ({
  getTasks: (project_id, asana_token) => dispatch(getTasks(project_id, asana_token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
