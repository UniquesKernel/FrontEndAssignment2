import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { Navbar } from './Components/Navbar';
import { LoginForm } from './Components/LoginForm';
import { PostJobToModel } from './Components/Manager/PostJobToModel';
import { Home } from './Components/Home';
import { JobsListTable } from './Components/JobsListTable';
import { CreateJob } from './Components/Manager/CreateJob'
import { CreateModel } from './Components/Manager/CreateModel'
import { CreateManager } from './Components/Manager/CreateManager'
import { DeleteJobFromModel } from './Components/Manager/DeleteJobFromModel'
 

function App() {
  return (
      <div className="App">
          <Router>
              <h1>Aflevering 2</h1>
              <Navbar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/loginform" element={<LoginForm />} />
                  <Route path="/logout" element={<LogOut />} />
                  <Route path="/jobslist" element={<JobsListTable />} />
                  <Route path="/postjobtomodel" element={<PostJobToModel />} />
                  <Route path="/createjob" element={<CreateJob />} />
                  <Route path="/createmodel" element={<CreateModel />} />
                  <Route path="/createmanager" element={<CreateManager />} />
                  <Route path="/deletejobfrommodel" element={<DeleteJobFromModel />} />

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