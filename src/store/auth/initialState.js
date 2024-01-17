export const initialState = {
  user: {
    name: null,
    email: null,
    avatarURL: null,
    bodyData: true,
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
  authorization: false,
  isLoggedIn: false,
  isRefreshing: false,
};
