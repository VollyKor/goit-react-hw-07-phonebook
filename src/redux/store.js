import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import logger from 'redux-logger';
import phonebookReducer from './phonebook/phonebook-reducer';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

// vinilla redux
// ======================
// const rootReducer = combineReducers({
//   phonebook: phonebookReducer,
// });

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );
// export default store;

//  Redux toolkit
// ===============================

export default store;
