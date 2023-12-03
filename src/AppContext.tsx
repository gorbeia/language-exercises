import { createContext, useContext, useState } from "react";
import { LessonData } from "./lesson/LessonChooser";
import { useNavigate } from "react-router-dom";

const AppContext = createContext<AppContextInterface | undefined>(undefined);


export function AppContextProvider({ children }: { children: JSX.Element | JSX.Element[] }) {

  const navigate = useNavigate();
    const [appContext, setAppContext] = useState<AppContextData>({});

    const closeLesson = () => {
        setAppContext(() => { return {} });
        navigate(`/`)
    }
    const chooseLesson = (lesson: LessonData) => {
        setAppContext(() => { return { selectedLesson: lesson } });
        navigate(`/practice/${lesson.path}`)
    }


    return (
        <AppContext.Provider value={{ ...appContext, chooseLesson, closeLesson }}>
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
}

export interface AppContextInterface extends AppContextData {
    chooseLesson: (lesson: LessonData) => void;
    closeLesson: () => void;
}