// import React, { useState } from 'react';
// import { Form, Button, Container } from 'react-bootstrap';

// const Register = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [role, setRole] = useState('student'); // default role

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle registration logic here
//   };

//   return (
//     <Container>
//       <h2>Register</h2>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="formBasicName">
//           <Form.Label>Name</Form.Label>
//           <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
//         </Form.Group>

//         <Form.Group controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </Form.Group>

//         <Form.Group controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </Form.Group>

//         <Form.Group controlId="formConfirmPassword">
//           <Form.Label>Confirm Password</Form.Label>
//           <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//         </Form.Group>

//         <Form.Group controlId="formRole">
//           <Form.Label>Role</Form.Label>
//           <Form.Control as="select" value={role} onChange={(e) => setRole(e.target.value)}>
//             <option value="student">Student</option>
//             <option value="parent">Parent</option>
//             <option value="teacher">Teacher</option>
//           </Form.Control>
//         </Form.Group>

//         {/* Additional fields based on role selection */}
//         {role === 'student' && (
//           <Form.Group controlId="formStudentID">
//             <Form.Label>Student ID</Form.Label>
//             <Form.Control type="text" placeholder="Enter Student ID" />
//           </Form.Group>
//         )}
//         {role === 'parent' && (
//           <>
//             <Form.Group controlId="formChildID">
//               <Form.Label>Child's Student ID</Form.Label>
//               <Form.Control type="text" placeholder="Enter Child's Student ID" />
//             </Form.Group>
//             <Form.Group controlId="formRelationship">
//               <Form.Label>Relationship to Child</Form.Label>
//               <Form.Control type="text" placeholder="Enter Relationship to Child" />
//             </Form.Group>
//           </>
//         )}
//         {role === 'teacher' && (
//           <>
//             <Form.Group controlId="formEmployeeID">
//               <Form.Label>Employee ID</Form.Label>
//               <Form.Control type="text" placeholder="Enter Employee ID" />
//             </Form.Group>
//             <Form.Group controlId="formDepartment">
//               <Form.Label>Department</Form.Label>
//               <Form.Control type="text" placeholder="Enter Department" />
//             </Form.Group>
//             <Form.Group controlId="formSubjects">
//               <Form.Label>Subjects Taught</Form.Label>
//               <Form.Control type="text" placeholder="Enter Subjects Taught" />
//             </Form.Group>
//           </>
//         )}

//         <Button variant="primary" type="submit">
//           Register
//         </Button>
//       </Form>
//     </Container>
//   );
// };

// export default Register;
// src/components/Auth/Register.js
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Register = () => {
  const [role, setRole] = useState('student');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    studentID: '',
    grade: '',
    dob: '',
    gender: '',
    childID: '',
    relationship: '',
    employeeID: '',
    department: '',
    subjects: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add registration logic here
  };

  return (
    <Container>
      <h2>Register</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formRole">
          <Form.Label>Role</Form.Label>
          <Form.Control as="select" value={role} onChange={handleRoleChange}>
            <option value="student">Student</option>
            <option value="parent">Parent</option>
            <option value="teacher">Teacher</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </Form.Group>

        {role === 'student' && (
          <>
            <Form.Group controlId="formStudentID">
              <Form.Label>Student ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Student ID"
                name="studentID"
                value={formData.studentID}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formGrade">
              <Form.Label>Grade</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Grade"
                name="grade"
                value={formData.grade}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formDOB">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Form.Control>
            </Form.Group>
          </>
        )}

        {role === 'parent' && (
          <>
            <Form.Group controlId="formChildID">
              <Form.Label>Child's Student ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Child's Student ID"
                name="childID"
                value={formData.childID}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formRelationship">
              <Form.Label>Relationship to Child</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Relationship to Child"
                name="relationship"
                value={formData.relationship}
                onChange={handleChange}
              />
            </Form.Group>
          </>
        )}

        {role === 'teacher' && (
          <>
            <Form.Group controlId="formEmployeeID">
              <Form.Label>Employee ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Employee ID"
                name="employeeID"
                value={formData.employeeID}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formDepartment">
              <Form.Label>Department</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Department"
                name="department"
                value={formData.department}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formSubjects">
              <Form.Label>Subjects Taught</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Subjects Taught"
                name="subjects"
                value={formData.subjects}
                onChange={handleChange}
              />
            </Form.Group>
          </>
        )}

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
