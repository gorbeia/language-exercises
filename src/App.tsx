import { Box, Grommet } from 'grommet'
import { grommet } from "grommet";
import './App.css'
import { Outlet } from 'react-router-dom';
import { AppContextProvider } from './AppContext';

function App() {

  return (
    <AppContextProvider>
      <Grommet full theme={grommet}>
        <Box pad="small" fill>
          <Outlet></Outlet>
        </Box>
      </Grommet>
    </AppContextProvider>
  )
}

export default App;
