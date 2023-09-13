import React, { useContext, useEffect, useCallback } from 'react';
import SocketContext from '../context/socket'
import { LiveScoreState } from '../context/LiveScoreProvider';

function SocketManager() {
    const socket = useContext(SocketContext);   
    const livescore = LiveScoreState();

    useEffect(() => {
        const connectListener = () => {
            console.log('Connected to server');
            socket.emit("setup", { data: "hello" });
        };

        const disconnectListener = () => {
            console.log('Disconnected from server');
        };

        const setupdataListener = (data) => {
            livescore.setevents(data);
        };

        const customEventListener = (data) => {
            console.log('Received custom event:', data);
        };
        const clientListner = (data) => {
            console.log("client listner", data)
            livescore.setevents(data);
        }

        socket.on('connect', connectListener);
        socket.on('disconnect', disconnectListener);
        socket.on('setupdata', setupdataListener);
        socket.on('customEvent', customEventListener);
        socket.on("clientupdates", clientListner)
        // Clean up event listeners when the component unmounts
        return () => {
            socket.off('connect', connectListener);
            socket.off('disconnect', disconnectListener);
            socket.off('setupdata', setupdataListener);
            socket.off('customEvent', customEventListener);
            socket.off('clientupdates', clientListner);
        };
    }, [socket]);

    return null; // This component doesn't render anything
}

export default SocketManager;
