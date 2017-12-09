import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    users: UserReducer,
    selectedUserId: SelectionReducer,
});
