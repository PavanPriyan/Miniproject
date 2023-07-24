// import React from "react";

// function Upload(){
//     return(
//         <div>
//             <section className="vh-100" style={{ backgroundColor: "#2779e2" }}>
//   <div className="container h-100">
//     <div className="row d-flex justify-content-center align-items-center h-100">
//       <div className="col-xl-9">
//         <h1 className="text-white mb-4">Upload Documents</h1>
//         <div className="card" style={{ borderRadius: 15 }}>
//           <div className="card-body">
//             <div className="row align-items-center pt-4 pb-3">
//               <div className="col-md-3 ps-5">
//                 <h6 className="mb-0">Full name</h6>
//               </div>
//               <div className="col-md-9 pe-5">
//                 <input type="text" className="form-control form-control-lg" />
//               </div>
//             </div>
//             <hr className="mx-n3" />
//             <div className="row align-items-center py-3">
//               <div className="col-md-3 ps-5">
//                 <h6 className="mb-0">Email address</h6>
//               </div>
//               <div className="col-md-9 pe-5">
//                 <input
//                   type="email"
//                   className="form-control form-control-lg"
//                   placeholder="example@example.com"
//                 />
//               </div>
//             </div>
           
//             <hr className="mx-n3" />
//             <div className="row align-items-center py-3">
//               <div className="col-md-3 ps-5">
//                 <h6 className="mb-0">Upload UG Certificate</h6>
//               </div>
//               <div className="col-md-9 pe-5">
//                 <input
//                   className="form-control form-control-lg"
//                   id="formFileLg"
//                   type="file"
//                 />
//                 <div className="small text-muted mt-2">
//                   Upload your CV/Resume or any other relevant file. Max file
//                   size 50 MB
//                 </div>
//               </div>
//             </div>
//             <hr className="mx-n3" />
//             <div className="row align-items-center py-3">
//               <div className="col-md-3 ps-5">
//                 <h6 className="mb-0">ID Proof</h6>
//               </div>
//               <div className="col-md-9 pe-5">
//                 <input
//                   className="form-control form-control-lg"
//                   id="formFileLg"
//                   type="file"
//                 />
//                 <div className="small text-muted mt-2">
//                   Upload your CV/Resume or any other relevant file. Max file
//                   size 50 MB
//                 </div>
//               </div>
//             </div>
//             <hr className="mx-n3" />
//             <div className="px-5 py-4">
//               <button type="submit" className="btn btn-primary btn-lg">
//                 Send application
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

//         </div>

//     )
// }
// export default Upload;










import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const steps = ['Application', 'Upload Document', 'Payment'];

export default function Upload() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
            <section className="vh-100" style={{ backgroundColor: "#2779e2" }}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-9">
        <h1 className="text-white mb-4">Upload Documents</h1>
        <div className="card" style={{ borderRadius: 15 }}>
          <div className="card-body">
            <div className="row align-items-center pt-4 pb-3">
              <div className="col-md-3 ps-5">
                <h6 className="mb-0">Full name</h6>
              </div>
              <div className="col-md-9 pe-5">
                <input type="text" className="form-control form-control-lg" />
              </div>
            </div>
            <hr className="mx-n3" />
            <div className="row align-items-center py-3">
              <div className="col-md-3 ps-5">
                <h6 className="mb-0">Email address</h6>
              </div>
              <div className="col-md-9 pe-5">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="example@example.com"
                />
              </div>
            </div>
           
            <hr className="mx-n3" />
            <div className="row align-items-center py-3">
              <div className="col-md-3 ps-5">
                <h6 className="mb-0">Upload UG Certificate</h6>
              </div>
              <div className="col-md-9 pe-5">
                <input
                  className="form-control form-control-lg"
                  id="formFileLg"
                  type="file"
                />
                <div className="small text-muted mt-2">
                  Upload your CV/Resume or any other relevant file. Max file
                  size 50 MB
                </div>
              </div>
            </div>
            <hr className="mx-n3" />
            <div className="row align-items-center py-3">
              <div className="col-md-3 ps-5">
                <h6 className="mb-0">ID Proof</h6>
              </div>
              <div className="col-md-9 pe-5">
                <input
                  className="form-control form-control-lg"
                  id="formFileLg"
                  type="file"
                />
                <div className="small text-muted mt-2">
                  Upload your CV/Resume or any other relevant file. Max file
                  size 50 MB
                </div>
              </div>
            </div>
            <hr className="mx-n3" />
            <div className="px-5 py-4">
              <button type="submit" className="btn btn-primary btn-lg">
                Send application
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>


      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              Step {activeStep + 1}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Link to='/Apply'>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              </Link>
              <Box sx={{ flex: '1 1 auto' }} />
              <Link to="/Payment">
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              </Link>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}