import React from 'react'
import { SocketProvider } from './context/SocketContext'

import {HomePage} from './pages/HomePage';

export const BrandNamesApp = () => {
    return (
        <SocketProvider>
            <HomePage />
        </SocketProvider>
    )
}
