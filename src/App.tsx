import { Outlet } from 'react-router-dom';
import { useAppContext } from './AppContext';
import { useEffect } from 'react';
import { LessonData } from './lesson/chooser/LessonChooser';
import { StyledApp } from './StyledApp';
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
        if (isFulfilled(result)) loadedLessons.push({ ...result.value as object, path: Object.keys(data)[index].slice(7) } as LessonData);

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
      <StyledApp>
          <Outlet></Outlet>
      </StyledApp>
  )
}

export default App;
