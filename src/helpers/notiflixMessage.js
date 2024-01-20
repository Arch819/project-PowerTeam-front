import { Confirm, Notify } from 'notiflix';
const statusArray = {
  OK: 'ok',
  INFO: 'info',
  REJECT: 'error',
  LOGOUT: 'logout',
};

export const notiflixMessage = (status, message) => {
  switch (status) {
    case statusArray.OK:
      return Notify.success(message);
    case statusArray.INFO:
      return Notify.info(message);
    case statusArray.REJECT:
      return Notify.failure(message);
    default:
      break;
  }
};
export const netliflixConfirmLogout = () => {
  return new Promise((resolve, reject) => {
    return Confirm.show(
      'Logout',
      'Are you sure you want to logout?',
      'Yes',
      'No',
      () => {
        Notify.success('See you. Bye');
        resolve();
      },
      () => {
        Notify.success('Thank you.');
        resolve();
      }
    );
  });
};
