import logo from './logo.svg';
import './App.css';
import MainPage from './MainPage/MainPage';
import { ChakraProvider } from '@chakra-ui/react'
import {LoginPage} from './LoginPage/LoginPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
          <Route path="main" element={<MainPage />} />
          <Route path="*" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
      {/* <MainPage /> */}
      {/* <LoginPage/> */}
    </ChakraProvider>
  );
}

export default App;
