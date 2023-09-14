import React, { useContext, useEffect, useCallback } from 'react';
import SocketContext from '../context/socket';

function SocketManager({ eventdata, seteventdata }) {
    const socket = useContext(SocketContext);

    // Handle admin_update event in a separate callback to avoid unnecessary re-renders
    // const handleAdminUpdate = useCallback((data) => {
    //     console.log("UPDATES", data)
    //     seteventdata((prevEventdata) => {
    //         const updatedEventdata = [...prevEventdata];
    //         const index = prevEventdata.findIndex((event) => event.id === data.id);
    //         if (index !== -1) {
    //             if (typeof data.score1 === 'number' && !isNaN(data.score1)) {
    //                 updatedEventdata[index].score1 = data.score1;
    //             }
    //             if (typeof data.score2 === 'number' && !isNaN(data.score2)) {
    //                 updatedEventdata[index].score2 = data.score2;
    //             }                
    //             if (typeof data.wicket1 === 'number' && !isNaN(data.wicket1)) {
    //                 updatedEventdata[index].wicket1 = data.wicket1;
    //             }
    //             if (typeof data.wicket2 === 'number' && !isNaN(data.wicket2)) {
    //                 updatedEventdata[index].wicket2 = data.wicket2;
    //             }
    //             if (typeof data.over1 === 'number' && !isNaN(data.over1)) {
    //                 updatedEventdata[index].over1 = data.over1;
    //             }
    //             if (typeof data.over2 === 'number' && !isNaN(data.over2)) {
    //                 updatedEventdata[index].over2 = data.over2;
    //             }
    //         }
    //         console.log("UPDATED EVETNS", updatedEventdata)
    //         return updatedEventdata;
    //     });
    // }, [seteventdata]);

    const handleAdminUpdate = useCallback((data) => {
        console.log("UPDATES", data);
        seteventdata((prevEventdata) => {
            const updatedEventdata = [...prevEventdata];
            const index = prevEventdata.findIndex((event) => event.id === data.id);
            if (index !== -1) {
                if (typeof data.score1 === 'number' && Number.isFinite(data.score1)) {
                    updatedEventdata[index].score1 = data.score1;
                }
                if (typeof data.score2 === 'number' && Number.isFinite(data.score2)) {
                    updatedEventdata[index].score2 = data.score2;
                }                
                if (typeof data.wicket1 === 'number' && Number.isFinite(data.wicket1)) {
                    updatedEventdata[index].wicket1 = data.wicket1;
                }
                if (typeof data.wicket2 === 'number' && Number.isFinite(data.wicket2)) {
                    updatedEventdata[index].wicket2 = data.wicket2;
                }
                if (typeof data.over1 === 'number' && Number.isFinite(data.over1)) {
                    updatedEventdata[index].over1 = data.over1;
                }
                if (typeof data.over2 === 'number' && Number.isFinite(data.over2)) {
                    updatedEventdata[index].over2 = data.over2;
                }
            }
            console.log("UPDATED EVENTS", updatedEventdata);
            return updatedEventdata;
        });
    }, [seteventdata]);
    
    const eventRemoveListener = useCallback((data) => {
        console.log("event removed id", data);
        seteventdata((prevEventData) => {
          const updatedData = prevEventData.filter((event) => event.id !== data.id);
          return updatedData;
        });
      });

    useEffect(() => {
        const connectListener = () => {
            console.log('Connected to server');
            socket.emit("setup", { data: "hello" });
        };

        const disconnectListener = () => {
            console.log('Disconnected from server');
        };

        const setupdataListener = (data) => {
            seteventdata(data);
        };

        const customEventListener = (data) => {
            console.log('Received custom event:', data);
        };

        const newEvent = (data) => {
            console.log("new event is ",data)
            seteventdata((prevEventdata) => [...prevEventdata, data]);
        }

        socket.on('connect', connectListener);
        socket.on('disconnect', disconnectListener);
        socket.on('setupdata', setupdataListener);
        socket.on('admin_update', handleAdminUpdate);
        socket.on('customEvent', customEventListener);
        socket.on("event_removed", eventRemoveListener)
        socket.on("new_event_broadcast", newEvent)
        // Clean up event listeners when the component unmounts
        return () => {
            socket.off('connect', connectListener);
            socket.off('disconnect', disconnectListener);
            socket.off('setupdata', setupdataListener);
            socket.off('admin_update', handleAdminUpdate);
            socket.off('customEvent', customEventListener);
            socket.off("event_removed", eventRemoveListener)
            socket.off("new_event_broadcast", newEvent)
        };
    }, [socket, handleAdminUpdate, eventRemoveListener]);

    return null; // This component doesn't render anything
}

export default SocketManager;
