import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StartScreenindex } from './components/startscreen';
import { LoginScreenindex } from './components/loginScreen';
import { SignupScreenindex } from './components/signupscreen';
import { HomeScreenindex } from './components/homeScreen';
import { CreateClassindex } from './components/createClassScreen';
import { EditScreenindex } from './components/editClassScreen';
import { TakeAttendanceindex } from './components/takeAttendanceScreen';
import { AfterAttendance } from './components/takeAttendanceScreen/afterAttendance';

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<StartScreenindex />} />
      <Route path='/login' element={<LoginScreenindex />} />
      <Route path='/signup' element={<SignupScreenindex />} />
      <Route path='/home' element={<HomeScreenindex />} />
      <Route path='/createclass' element={<CreateClassindex />} />
      <Route path='/editclass' element={<EditScreenindex />} />
      <Route path='/takeattendance/:id' element={<TakeAttendanceindex />}/>
      <Route path='/afterattendance' element={<AfterAttendance />}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
