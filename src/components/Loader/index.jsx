import React from 'react';
import { Bars } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Bars
      height="80"
      width="60"
      color="#E6533C"
      ariaLabel="bars-loading"
      wrapperStyle={{
        display: 'flex',
        position: 'fixed',
        zIndex: '9999',
        top: '0',
        left: '0',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
      }}
      wrapperClass=""
      visible={true}
    />
  );
};
export default Loader;
