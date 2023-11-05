import { Box, Grommet } from 'grommet'
import { grommet } from "grommet";
import './App.css'
import Practice from './question/Practice'
import LessonChooser, { LessonData } from './question/LessonChooser';
import { useState } from 'react';

function App() {
  const [lesson, setLesson] = useState<LessonData|undefined>();
  const closeLesson = () => {
    setLesson(() => undefined);
  }

  const getComponent = () => {
    if (lesson == null) {
      return <LessonChooser onChoose={(lesson:LessonData) => setLesson(lesson) }></LessonChooser>
    } else {
      return <Practice lesson={lesson} onClose={closeLesson}></Practice>
    }
  }

  return (
    <Grommet full theme={grommet}>
    <Box pad="small" fill>
      {getComponent()}
    </Box>
    </Grommet>
  )
}

export default App
