import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './mca.css';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Mca() {
  return (
    <><div className='mb'><img className='img'src='https://media.getmyuni.com/assets/images/main/course/content/96omc7hshc-1a6e260oy0-w3.webp'></img>
      
      <Card sx={{ minWidth: 650, marginLeft: 8,marginTop:12}}>
        <CardContent>
          <h1 className='cd'>Course Details</h1>
          <ul className='poi'>
  <li>MCA Full Form: Master of Computer Application</li><br></br>
  <li>MCA Course Level: Post Graduation Degree Course</li><br></br>
  <li>Duration of LLB: Full Time MCA: 3 Years; Integrated MCA: 5 Years</li><br></br>
  <li>Top MCA Entrance Exams: TANCET, WBJEE JECA, UPSEE, TSICET.</li><br></br>
  <li>MCA Eligibility: Student must have mathematics as one of the subjects in Class 12 is compulsory with 60%</li><br></br>
  <li>MCA Fees: INR 30,000 – INR 2,00,000</li><br></br>
  <li>Top MCA Specializations:  Frontend Developers, Backend Developers, Web Designing, Networking Professionals</li>
</ul>
          
        </CardContent>
        <CardActions>
          <Button size="small">Apply</Button>
        </CardActions>
      </Card>
    </div></>
  );
}








