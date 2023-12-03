import { Box, Grommet } from 'grommet'
import { grommet } from "grommet";
import './App.css'
import { Outlet } from 'react-router-dom';

function App() {

  return (
      <Grommet full theme={grommet}>
        <Box pad="small" fill>
          <Outlet></Outlet>
        </Box>
      </Grommet>
  )
}

export default App;
