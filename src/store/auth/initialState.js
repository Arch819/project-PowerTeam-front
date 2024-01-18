export const initialState = {
  user: {
    name: null,
    email: null,
    avatarURL: null,
    bodyData: false,
  },
  userParams: {
    height: null,
    currentWeight: null,
    desiredWeight: null,
    birthday: '',
    blood: null,
    sex: '',
    levelActivity: null,
    bmr: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};
