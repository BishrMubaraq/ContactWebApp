import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ComposeMessage from './pages/ComposeMessage/ComposeMessage'
import ContactInfo from './pages/ContactInfo/ContactInfo'
import MainPage from './pages/MainPage/MainPage'
import MessagesPage from './pages/MessagesPage/MessagesPage'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/messages' element={<MessagesPage />} />
          <Route path='/contact-info/:id' element={<ContactInfo />} />
          <Route path='/compose-message' element={<ComposeMessage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
