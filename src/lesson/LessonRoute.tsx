import { useParams } from "react-router-dom";
import Practice from "./Lesson";
import { useAppContext } from "../AppContext";

function LessonRoute() {
    const { lessonPath } = useParams();
    if (lessonPath == null) {
        throw new Error("lesson path is required");
    }
    const appContext = useAppContext();
    console.log('appContext', appContext)
    appContext.chooseLessonByPath(lessonPath);
    return (
        <Practice></Practice>
    )
}

export default LessonRoute;