import { useContext } from 'react';

import { NotificationContext } from '../context/NotificationProvider';

const useNotificationContext = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error("useNotificationContext must be used within an NotifactionProvider");
    }

    return context;
};

export default useNotificationContext;