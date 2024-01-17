export const handleRegisterUserFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.authorization = true;
};

export const handleLoginFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.authorization = true;
  state.isLoggedIn = true;
};

export const handleLogOutPending = state => {
  state.user = null;
  state.token = null;
  state.authorization = false;
  state.isLoggedIn = false;
};

export const handleLogOutFulfilled = state => {
  state.user = null;
  state.token = null;
  state.authorization = false;
  state.isLoggedIn = false;
};

export const handleFetchCurrentUserPending = state => {
  state.isRefreshing = true;
};

export const handleFetchCurrentUserFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.userParams = payload.userParams;
  state.authorization = true;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

export const handleUpdateAvatarFulfilled = (state, { payload }) => {
  state.userData.avatarURL = payload.avatarURL;
  state.isRefreshing = false;
};
