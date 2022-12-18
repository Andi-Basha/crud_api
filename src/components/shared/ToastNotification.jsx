import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import useNotificationContext from '../../lib/hooks/useNotificationContext';

export const ToastNotification = () => {
  const [position, setPosition] = useState('top-start');
  const {notification, hideNotification} = useNotificationContext();

  return (
    <ToastContainer className={`Toast ${notification?.class}`} onClick={() => hideNotification()}>
      <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">{notification?.title}</strong>
          <small className="text-muted">{notification?.time}</small>
        </Toast.Header>
        <Toast.Body>{notification?.message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
