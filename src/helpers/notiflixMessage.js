import { Confirm, Notify } from 'notiflix';
const statusArray = {
  OK: 'ok',
  INFO: 'info',
  REJECT: 'error',
};

const confirmArray = {
  LOGOUT: 'logout',
  DELETE: 'delete',
};

const confirm = {
  logout: ['Logout', 'Are you sure you want to logout?'],
  delete: ['Delete', 'Are you sure you want to delete?'],
};

Confirm.init({
  zindex: 9000,
  backgroundColor: 'var(--bg-alert)',
  backOverlayColor: 'rgba(0,0,0,0.7)',
  borderRadius: '12px',
  cssAnimationStyle: 'zoom',
  titleColor: 'var(--color-text-alert)',
  fontFamily: 'Roboto',
  okButtonBackground: 'var(--bg-btn-positive)',
  cancelButtonBackground: 'var(--bg-btn-negative)',
});
Notify.init({
  borderRadius: '12px',
  clickToClose: true,
  zindex: 9000,
  fontFamily: 'Roboto',
  fontSize: '16px',
  cssAnimationStyle: 'from-right',
  fontAwesomeIconSize: '28px',
  success: {
    background: '#3CBF61',
    textColor: '#EFEDE8',
  },
  failure: {
    background: '#E9101D',
    textColor: '#EFEDE8',
  },
  info: {
    textColor: '#EFEDE8',
  },
});

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
export const notiflixConfirmLogout = event => {
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
