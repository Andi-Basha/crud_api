import React, { useState } from 'react';

export const NotificationContext = React.createContext(null);

const NotificationProvider = ({children}) => {
    const [notification, setNotification] = useState(null);
    const [showNotification, setShowNotification] = useState(false);

    const addProductNotification = () => {
        setNotification({
            title: 'Message',
            time: 'Just Now',
            message: 'Product Added Succesfully',
            class: 'add'
        })
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 3000)
    }

    const editProductNotification = () => {
        setNotification({
            title: 'Message',
            time: 'Just Now',
            message: 'Product Edited Succesfully',
            class: 'edit'
        })
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 3000)
    }

    const deleteProductNotification = () => {
        setNotification({
            title: 'Message',
            time: 'Just Now',
            message: 'Product Deleted Succesfully',
            class: 'delete'
        })
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 3000)
    }


    const hideNotification = () => {
        setShowNotification(false)
    }

    return (
        <NotificationContext.Provider value={{notification, showNotification, addProductNotification, editProductNotification, deleteProductNotification, hideNotification}}>
            {children}
        </NotificationContext.Provider>
    )
}

export default NotificationProvider;