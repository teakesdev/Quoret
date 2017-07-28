import {connect} from 'react-redux';
import SearchForm from './search_form';

import { selectAllQuestions } from '../../reducers/selectors';
import { fetchAllQuestions } from '../../util/question_api_util';
import { requestAllQuestions } from '../../actions/question_actions';

const mapStateToProps = state => ({
  questions: selectAllQuestions(state)
});

// const mapDispatchToProps = dispatch => ({
//   fetchAllQuestions: () => dispatch(fetchAllQuestions())
// });

const SearchContainer = connect(
  mapStateToProps
  // mapDispatchToProps
)(SearchForm);

export default SearchContainer;
