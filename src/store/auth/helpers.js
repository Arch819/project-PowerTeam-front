export const handleRegisterUserFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
};

export const handleLoginFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

export const handleLogOutPending = state => {
  state.user = null;
  state.token = null;
  state.isLoggedIn = false;
};

export const handleLogOutFulfilled = state => {
  state.user = null;
  state.token = null;
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
  state.user.avatarURL = payload.avatarURL;
  state.isRefreshing = false;
};
