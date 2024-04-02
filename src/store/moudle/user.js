import { loginApi } from '@/servers/user';
import { getToken, setPersistenceToken } from '@/utils';
import { createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';

const userStore = createSlice({
  name: 'user',
  initialState: {
    token: getToken() || ''
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    }
  }
});

const { setToken } = userStore.actions;

const fetchToken = (date) => {
  return async (dispatch) => {
    const { message: resMessage, data } = await loginApi(date);
    if(resMessage === 'OK') {
      dispatch(setToken(data.token));
      setPersistenceToken(data.token);
      message.success('登录成功!')
    }
  }
}

export {
  fetchToken
}

export default userStore.reducer;