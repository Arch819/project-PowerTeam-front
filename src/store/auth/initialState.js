export const initialState = {
  user: {
    name: '',
    email: '',
    avatarURL: '',
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
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
};
