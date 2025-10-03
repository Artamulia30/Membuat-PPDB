import { useState } from 'react'
import Ladingpage from 'src/component/LadingPage'
import { Route, Routes } from 'react-router-dom';

function App() {
  const [Count, SetCount] = useState(0)

  return (
    <>
    <Routes>
    <Route path="/" element={<LadingPage/>}></Route>
    </Routes>
    </>
  )
}

export default App;
