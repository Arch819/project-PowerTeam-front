export const handleRegisterUserFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

export const handleLoginFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.userParams = payload.userParams;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

export const handleLogOutPending = state => {
  state.user = {
    name: '',
    email: '',
    avatarURL: '',
    bodyData: false,
  };
  state.token = '';
  state.isLoggedIn = false;
};

export const handleLogOutFulfilled = state => {
  state.user = {
    name: '',
    email: '',
    avatarURL: '',
    bodyData: false,
  };
  state.userParams = {
    height: 0,
    currentWeight: 0,
    desiredWeight: 0,
    birthday: '',
    blood: 0,
    sex: '',
    levelActivity: 0,
    bmr: 0,
  };
  state.token = '';
  state.isLoggedIn = false;
};

export const handleFetchCurrentUserPending = state => {
  state.isRefreshing = true;
};

export const handleFetchCurrentUserFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.userParams = payload.userParams;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

export const handleUpdateAvatarFulfilled = (state, { payload }) => {
  state.user.avatarURL = payload;
  state.isRefreshing = false;
};

export const handleUpdateProfileFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.userParams = payload.userParams;
  state.isRefreshing = false;
};
