import React, { createContext } from 'react';
import { useSocket } from '../hooks/useSocket';

export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {
    const { socket, online } = useSocket(process.env.REACT_APP_URL_SOCKET || "http://localhost:8080/");

    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )
}

