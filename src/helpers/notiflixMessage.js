import { Confirm, Notify } from 'notiflix';
const statusArray = {
  OK: 'ok',
  INFO: 'info',
  REJECT: 'error',
  LOGOUT: 'logout',
};

const confirmArray = {
  LOGOUT: 'logout',
  DELETE: 'delete',
};

const confirm = {
  logout: ['Logout', 'Are you sure you want to logout?'],
  delete: ['Delete', 'Are you sure you want to delete?'],
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
export const netliflixConfirmLogout = event => {
  return new Promise((resolve, reject) => {
    switch (event) {
      case confirmArray.LOGOUT:
        return Confirm.show(
          confirm.logout[0],
          confirm.logout[1],
          'Yes',
          'No',
          () => {
            Notify.success('See you. Bye');
            resolve();
          },
          () => {
            reject();
          }
        );
      case confirmArray.DELETE:
        return Confirm.show(
          confirm.delete[0],
          confirm.delete[1],
          'Yes',
          'No',
          () => {
            resolve();
          },
          () => {
            reject();
          }
        );
      default:
        break;
    }
  });
};
