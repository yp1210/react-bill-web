import { configureStore } from '@reduxjs/toolkit';
import user from './moudle/user';

const store = configureStore({
  reducer: {
    userStore: user
  }
})

export default store