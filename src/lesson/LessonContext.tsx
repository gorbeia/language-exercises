import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
import { LessonData } from "./LessonChooser";
const LessonContext = createContext<LessonContextInterface | undefined>(undefined);


export function LessonContextProvider({ children }: { children: JSX.Element | JSX.Element[] }) {

    const [lesson, setLesson] = useState<LessonData | undefined>();
    const chooseLessonByPath = (path: string, lessons: LessonData[]): void => {
        const selected = lessons?.find((l) => l.path === path);
        if (lesson?.path != selected?.path && selected != null) {
            setLesson(() => selected);
        }
    }

    return (
        <LessonContext.Provider value={{ lesson, setLesson, chooseLessonByPath }}>
            {children}
        </LessonContext.Provider>
    );
}

export function useLessonContext(): LessonContextInterface {
    const context = useContext(LessonContext)
    if (context === undefined) {
        throw new Error('useLessonContext must be used within a LessonContextProvider')
    }
    return context
}

export interface LessonContextData {
    lesson?: LessonData;
}

export interface LessonContextInterface extends LessonContextData {
    setLesson: Dispatch<SetStateAction<LessonData | undefined>>;
    chooseLessonByPath(path: string, lessons: LessonData[]): void;
}