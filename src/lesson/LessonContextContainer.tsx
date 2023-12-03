
import { LessonContextProvider } from "./LessonContext";
import LessonRoute from "./LessonRoute";

function LessonContextContainer() {
    return (
        <LessonContextProvider>
            <LessonRoute></LessonRoute>
        </LessonContextProvider>
        
    )
}

export default LessonContextContainer;