import React from 'react';

export const Toast = ({ message }) => {
  if (!message) return null;

  return (
    <div className="toast-notice anim-toast">
      <span>{message}</span>
    </div>
  );
};

export default Toast;
