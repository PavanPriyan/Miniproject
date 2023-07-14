// import React from 'react';
// import {
//   MDBContainer,
//   MDBInput,
//   MDBCheckbox,
//   MDBBtn,
//   MDBIcon
// }
// from 'mdb-react-ui-kit';
// import { Link } from 'react-router-dom';

// function Login1() {
//   return (
//     <MDBContainer  className="p-3  d-flex flex-column w-50" style={{borderColor:'black'}}>

//       <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
//       <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

//       <div className="d-flex justify-content-between mx-3 mb-4">
//         <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
//         <a href="!#">Forgot password?</a>
//       </div>
//       <Link to="/Home">
      
//       <MDBBtn className="mb-4">Sign in</MDBBtn>
      
//       </Link>

//       <div className="text-center">
//         <p>Not a member? <Link to="/Reg"> Register</Link></p>
        

//         <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
//           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//             <MDBIcon fab icon='facebook-f' size="sm"/>
//           </MDBBtn>

//           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//             <MDBIcon fab icon='twitter' size="sm"/>
//           </MDBBtn>

//           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//             <MDBIcon fab icon='google' size="sm"/>
//           </MDBBtn>

//           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//             <MDBIcon fab icon='github' size="sm"/>
//           </MDBBtn>

//         </div>
//       </div>

//     </MDBContainer>
//   );
// }

// export default Login1;




import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,

}
from 'mdb-react-ui-kit';
import './Login1.css';

function Login1() {
  const [fname, setFname] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
  
    if (fname.trim() === '') {
      validationErrors.fname = 'First Name is required';
    }
  

    if (password.trim() === '') {
      validationErrors.password = 'Password is required';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*()])[A-Za-z\d@#$%^&*()]{8,}/.test(password)) {
      validationErrors.password =
        'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character';
      alert('Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character');
    }
  
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length === 0) {
      navigate('/Home');
    }
  };
  
  

  const handleClick = () => {
    alert('Registered Successfully');
  };
  return (
    <><MDBContainer fluid className='p-4'>

      <MDBRow>



        <MDBCol md='5'>

          <MDBCard className='my-4'>
            <MDBCardBody className='p-5'>
              <h1>Login</h1>
              <form onSubmit={handleSubmit}>
                <MDBInput
                  wrapperClass='mb-4'
                  label='User Name'
                  id='f_name'
                  type='text'
                  size='lg'
                  required
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  validation={errors.fname ? false : true}
                  errorMessage={errors.fname} />

                <MDBInput
                  wrapperClass='mb-4'
                  label='Password'
                  id='password'
                  type='password'
                  size='lg'
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  validation={errors.password ? false : true}
                  errorMessage={errors.password} />


                <button className="btn btn-primary mb-4 px-5" type="submit">Login</button>
              </form>
              <p>Not a member? <Link to="/Reg"> Register</Link></p>





            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer></>
  );
}

export default Login1;