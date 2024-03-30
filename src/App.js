import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import './App.css';
import Home from './Home';
import NavBar from './components/common/NavBar.js';
import AddStudent from './components/students/AddStudent.js';
import EditStudent from './components/students/EditStudent.js';
import StudentProfile from './components/students/StudentProfile.js';
import StudentsView from './components/students/StudentsView';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/view-students' element={<StudentsView />} />
          <Route exact path='/add-student' element={<AddStudent />} />
          <Route exact path='/edit-student/:id' element={<EditStudent />} />
          <Route exact path='/student-profile/:id' element={<StudentProfile />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
