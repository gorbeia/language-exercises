import { Box, Grommet } from 'grommet'
import { grommet } from "grommet";
import './App.css'
import { Outlet } from 'react-router-dom';
import { useAppContext } from './AppContext';
import { useEffect } from 'react';
import { LessonData } from './lesson/LessonChooser';
const data = import.meta.glob("./data/*.json");

function App() {
  const appContext = useAppContext();
  useEffect(() => {
    const loadedLessons: LessonData[] = [];
    const promises = [];
    for (const path in data) {
      promises.push(data[path]());
    }
    Promise.allSettled(promises).then((results) => {
      for (let index = 0; index < results.length; index++) {
        const result = results[index];
        if (isFulfilled(result)) loadedLessons.push({ ...result.value as object, path: Object.keys(data)[index].slice(8) } as LessonData);

      }
      appContext.setLessons(loadedLessons);
    });
  }, [appContext]);
  function isFulfilled<T>(
    val: PromiseSettledResult<T>
  ): val is PromiseFulfilledResult<T> {
    return val.status === "fulfilled";
  }

  return (
      <Grommet full theme={grommet}>
        <Box pad="small" fill>
          <Outlet></Outlet>
        </Box>
      </Grommet>
  )
}

export default App;
