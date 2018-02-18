import {connect} from 'react-redux';
import TaskList from './task_list.jsx';
import {getTasks} from  '../actions/task_actions';

const mapStateToProps = state => {
  return {

}};

const mapDispatchToProps = dispatch => ({
  getTasks: (project_id) => dispatch(getTasks(project_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
