import React, {useContext} from "react";

const DependencyContext = React.createContext();


export function useDependency() {
    return useContext(DependencyContext);
}

export function DependencyProvider({myService, children }) {
    return (
        <DependencyContext.Provider value={{myService}}>
            {children}
        </DependencyContext.Provider>
    );
}