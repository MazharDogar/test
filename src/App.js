import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import Home from './Pages/home/home';
function App() {
  const location = useLocation();
  // const [show, setShow] = useState(true);

  // useEffect(() => {
  //   if (location.pathname.includes("/userregistration") || location.pathname.includes("/artistprofile") || location.pathname.includes("/blogs")) {
  //     setShow(false);
  //   }
  //   else {
  //     setShow(true)
  //   }
  // }, [location])

  return (  
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
     
  );
}

export default App;
