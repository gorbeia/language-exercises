import { useParams } from "react-router-dom";
import Practice from "./Lesson";
import { useAppContext } from "../AppContext";
import { useLessonContext } from "./LessonContext";
import { useEffect } from "react";

function LessonRoute() {
    const { lessonPath } = useParams();
    if (lessonPath == null) {
        throw new Error("lesson path is required");
    }
    const appContext = useAppContext();
    const lessonContext = useLessonContext();
    useEffect(() => {
        if (appContext.lessons != null) {
            lessonContext.chooseLessonByPath(lessonPath, appContext.lessons);
        }
    }, [appContext.lessons]);
    return (
        <Practice></Practice>
    )
}

export default LessonRoute;