import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
import { LessonData } from "./lesson/chooser/LessonChooser";

const AppContext = createContext<AppContextInterface | undefined>(undefined);


export function AppContextProvider({ children }: { children: JSX.Element | JSX.Element[] }) {

    const [lessons, setLessons] = useState<LessonData[]>([]);


    return (
        <AppContext.Provider value={{ lessons, setLessons }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext(): AppContextInterface {
    const context = useContext(AppContext)
    if (context === undefined) {
        throw new Error('useAppContext must be used within a AppContextProvider')
    }
    return context
}

export interface AppContextData {
    lessons?: LessonData[];
}

export interface AppContextInterface extends AppContextData {
    setLessons: Dispatch<SetStateAction<LessonData[]>>;
}