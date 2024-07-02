// // import React from 'react';
// // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// // import Header from './components/layout/Header';
// // import Footer from './components/layout/Footer';
// // import Home from './pages/Home';
// // import Academics from './pages/Academics';
// // import Login from './components/auth/Login';
// // import Register from './components/auth/Register';

// // function App() {
// //   return (
// //     <Router>
// //       <Header />
// //       <Switch>
// //         <Route path="/" exact component={Home} />
// //         <Route path="/academics" component={Academics} />
// //         <Route path="/login" component={Login} />
// //         <Route path="/register" component={Register} />
// //         {/* Add more routes as needed */}
// //       </Switch>
// //       <Footer />
// //     </Router>
// //   );
// // }

// // export default App;














// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/layout/Header';
// import Footer from './components/layout/Footer';
// import Home from './pages/Home';
// import Academics from './pages/Academics';
// import Login from './components/auth/Login';
// import Register from './components/auth/Register';
// import StudentPortal from './pages/StudentPortal';
// import ParentPortal from './pages/ParentPortal';
// import TeacherPortal from './pages/TeacherPortal';
// import AdminDashboard from './pages/AdminDashboard';
// import AttendanceTracking from './components/AttendanceTracking';
// import GradesManagement from './components/GradesManagement';
// import ReportsAnalytics from './components/ReportsAnalytics';

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/academics" element={<Academics />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/student-portal" element={<StudentPortal />} />
//         <Route path="/parent-portal" element={<ParentPortal />} />
//         <Route path="/teacher-portal" element={<TeacherPortal />} />
//         <Route path="/admin-dashboard" element={<AdminDashboard />} />
//         <Route path="/attendance-tracking" element={<AttendanceTracking />} />
//         <Route path="/grades-management" element={<GradesManagement />} />
//         <Route path="/reports-analytics" element={<ReportsAnalytics />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;














import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Academics from './pages/Academics';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import StudentPortal from './pages/StudentPortal';
import ParentPortal from './pages/ParentPortal';
import TeacherPortal from './pages/TeacherPortal';
import AdminDashboard from './pages/AdminDashboard';
import AttendanceTracking from './components/AttendanceTracking';
import GradesManagement from './components/GradesManagement';
import ReportsAnalytics from './components/ReportsAnalytics';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student-portal" element={<StudentPortal />} />
        <Route path="/parent-portal" element={<ParentPortal />} />
        <Route path="/teacher-portal" element={<TeacherPortal />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/attendance-tracking" element={<AttendanceTracking />} />
        <Route path="/grades-management" element={<GradesManagement />} />
        <Route path="/reports-analytics" element={<ReportsAnalytics />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
