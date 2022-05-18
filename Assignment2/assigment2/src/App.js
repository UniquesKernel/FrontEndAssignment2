import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { Navbar } from './Components/Navbar';
import { ReactHookLoginForm } from './Components/ReactHookLoginForm';
import { Home } from './Components/Home';
import { JobsListTable } from './Components/JobsListTable';


function App() {
  return (
      <div className="App">
          <Router>
              <h1>Aflevering 2</h1>
              <Navbar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/reacthookloginform" element={<ReactHookLoginForm />} />
                  <Route path="/logout" element={<LogOut />} />
                  <Route path="/jobslist" element={<JobsListTable />} />
            </Routes>
        </Router>
     </div>
  );
}

const LogOut = () => {
    localStorage.removeItem("loginToken");
    window.location.replace("/");
}

export default App;