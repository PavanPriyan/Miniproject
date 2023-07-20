import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './llb.css';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Llb() {
  return (
    <><div className='mb'><img className='img'src='https://alcamritsar.ac.in/downloads/llb.jpg'></img>
      
      <Card sx={{ minWidth: 650, marginLeft: 8,marginTop:12}}>
        <CardContent>
          <h1 className='cd'>Course Details</h1>
          <ul className='poi'>
  <li>LLB Full Form: Bachelor of Legislative Law</li><br></br>
  <li>LLB Course Level: Post Graduation Degree Course</li><br></br>
  <li>Duration of LLB: Full Time LLB: 3 Years; Integrated LLB: 5 Years</li><br></br>
  <li>Top LLB Entrance Exams: CLAT, AILET, LSAT, TS LAWCET, AP LAWCET, SET SLAT, DU LLB, etc.</li><br></br>
  <li>LLB Eligibility: 10+2 equivalent from Recognized Education Board with 50%</li><br></br>
  <li>LLB Fees: INR 350000 – 18,00,000</li><br></br>
  <li>Top LLB Specializations:  Advocate, Solicitor, Attorney General, District & Sessions Judge, Sub-Magistrate</li>
</ul>
          
        </CardContent>
        <CardActions>
          <Button size="small">Apply</Button>
        </CardActions>
      </Card>
    </div></>
  );
}








