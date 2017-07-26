import {connect} from 'react-redux';
import SearchForm from './search_form';

import { selectAllQuestions } from '../../reducers/selectors';
import { fetchAllQuestions } from '../../util/question_api_util';

const mapStateToProps = state =>({
  questions: selectAllQuestions(state)
});

// const mapDispatchToProps = dispatch => ({
//   fetchAllQuestions: () => dispatch(fetchAllQuestions())
// });

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(SearchForm);
