import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const steps = ['Application Form', 'Upload Document', 'Payment'];

export default function Apply() {
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
    <section className="h-100 bg-dark">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration my-4">
          <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                alt="Sample photo"
                className="img-fluid"
                style={{
                  borderTopLeftRadius: ".25rem",
                  borderBottomLeftRadius: ".25rem"
                }}
              />
            </div>
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-5 text-uppercase">
                  Student registration form
                </h3>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form3Example1m"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example1m">
                        First name
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form3Example1n"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example1n">
                        Last name
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form3Example1m1"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example1m1">
                        Mother's name
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form3Example1n1"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example1n1">
                        Father's name
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example8"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form3Example8">
                    Address
                  </label>
                </div>
                <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                  <h6 className="mb-0 me-4">Gender: </h6>
                  <div className="form-check form-check-inline mb-0 me-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="femaleGender"
                      defaultValue="option1"
                    />
                    <label className="form-check-label" htmlFor="femaleGender">
                      Female
                    </label>
                  </div>
                  <div className="form-check form-check-inline mb-0 me-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="maleGender"
                      defaultValue="option2"
                    />
                    <label className="form-check-label" htmlFor="maleGender">
                      Male
                    </label>
                  </div>
                  <div className="form-check form-check-inline mb-0">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="otherGender"
                      defaultValue="option3"
                    />
                    <label className="form-check-label" htmlFor="otherGender">
                      Other
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <select className="select">
                      <option value={1}>State</option>
                      <option value={2}>Option 1</option>
                      <option value={3}>Option 2</option>
                      <option value={4}>Option 3</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-4">
                    <select className="select">
                      <option value={1}>City</option>
                      <option value={2}>Option 1</option>
                      <option value={3}>Option 2</option>
                      <option value={4}>Option 3</option>
                    </select>
                  </div>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example9"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form3Example9">
                    DOB
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example90"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form3Example90">
                    Pincode
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example99"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form3Example99">
                    Course
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example97"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form3Example97">
                    Email ID
                  </label>
                </div>
                <div className="d-flex justify-content-end pt-3">
                  <button type="button" className="btn btn-light btn-lg">
                    Reset all
                  </button>
                  <button type="button" className="btn btn-warning btn-lg ms-2">
                    Submit form
                  </button>
                </div>
              </div>
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
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Link to="/Upload">
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