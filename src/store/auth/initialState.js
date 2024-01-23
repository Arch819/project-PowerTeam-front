export const initialState = {
  user: {
    name: '',
    email: '',
    avatarURL: '',
    bodyData: false,
    createdAt: null,
  },
  userParams: {
    height: 0,
    currentWeight: 0,
    desiredWeight: 0,
    birthday: '',
    blood: 0,
    sex: '',
    levelActivity: 0,
    bmr: 0,
  },
  token: '',
  isLoggedIn: false,
  isRefreshing: true,
};
