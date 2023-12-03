import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
import { LessonData } from "./lesson/LessonChooser";

const AppContext = createContext<AppContextInterface | undefined>(undefined);


export function AppContextProvider({ children }: { children: JSX.Element | JSX.Element[] }) {

    const [appContext, setAppContext] = useState<AppContextData>({});
    const [lessons, setLessons] = useState<LessonData[]>([]);

    const chooseLessonByPath = (path: string): void => {
        const lesson = lessons?.find((l) => l.path === path);
        if (appContext.selectedLesson?.path != lesson?.path)
        setAppContext(() => { return { selectedLesson: lesson } });
    }

    return (
        <AppContext.Provider value={{ ...appContext, lessons, setLessons, chooseLessonByPath }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext(): AppContextInterface {
    const context = useContext(AppContext)
    if (context === undefined) {
        throw new Error('useCount must be used within a AppContextProvider')
    }
    return context
}

export interface AppContextData {
    selectedLesson?: LessonData;
    lessons?: LessonData[];
}

export interface AppContextInterface extends AppContextData {
    setLessons: Dispatch<SetStateAction<LessonData[]>>;
    chooseLessonByPath(path: string): void;
}