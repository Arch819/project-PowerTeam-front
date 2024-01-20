export const handleRegisterUserFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

export const handleLoginFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
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
