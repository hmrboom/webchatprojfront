import logo from './logo.svg';
import './App.css';
import MainPage from './MainPage/MainPage';
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    <ChakraProvider>
      <MainPage />
    </ChakraProvider>
  );
}

export default App;
