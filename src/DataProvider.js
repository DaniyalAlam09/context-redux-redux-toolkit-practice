import React, { useState, useEffect } from "react";
import { createContext } from "react";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => React.useContext(DataContext);
