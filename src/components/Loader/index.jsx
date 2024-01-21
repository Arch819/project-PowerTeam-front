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
