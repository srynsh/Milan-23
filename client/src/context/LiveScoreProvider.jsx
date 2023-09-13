import React, { createContext, useContext, useState } from 'react';

const LiveScoreContext = createContext()

const LiveScoreProvider = ({ children }) => {
    const [events, setevents] = useState([])

    return (
        <LiveScoreContext.Provider
            value={{ events, setevents }}>
            {children}
        </LiveScoreContext.Provider>
    )
}

export const LiveScoreState = () => {
    return useContext(LiveScoreContext);
}

// export LiveScoreContext;

export default LiveScoreProvider;