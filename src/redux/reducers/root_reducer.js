import { combineReducers } from 'redux';
import GetSpaReducer from './spa_reducer';
import GetServiceReducer from './service_reducer';
import workScheduleReducer from './work_schedule_reducer';

const rootReducer = combineReducers({
  GetSpaReducer,
  GetServiceReducer,
  workScheduleReducer,
});

export default rootReducer;
