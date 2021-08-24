// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
    <Navbar title="TextUtils"/>
    <TextForm heading="Enter Text For Analyzing :" />
    {/* <About/> */}
    </>
  );
}

export default App;
