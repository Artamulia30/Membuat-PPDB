import { useState } from 'react'
import Homepage from 'src/component/HomePage'
import { Route, Routes } from 'react-router-dom';

function App() {
  const [Count, SetCount] = useState(0)

  return (
    <>
    <Routes>
    <Route path="/" element={<HomePage/>}></Route>
    </Routes>
    </>
  )
}

export default App;
