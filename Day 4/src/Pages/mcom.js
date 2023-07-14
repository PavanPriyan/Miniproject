import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './mcom.css';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Mcom() {
  return (
    <><div className='mb'><img className='img'src='https://www.galaxyeduworld.com/storage/blogs/1599829058_5f5b7442e27e2_750_351.jpg'></img>
      
      <Card sx={{ minWidth: 650, marginLeft: 8,marginTop:12}}>
        <CardContent>
          <h1 className='cd'>Course Details</h1>
          <ul className='poi'>
  <li>MCom Full Form: Master of Commerce</li><br></br>
  <li>MCom Course Level: Post Graduation Degree Course</li><br></br>
  <li>Duration of LLB: Full Time MCom: 2 Years</li><br></br>
  <li>Top MCom Entrance Exams: BHU PET, PU CET, AU CET, etc.</li><br></br>
  <li>MCom Eligibility: Graduates from any discipline from any recognized university are eligible to study this course.</li><br></br>
  <li>MCA Fees: INR 30,000 – INR 5,00,000</li><br></br>
  <li>Top MCom Specializations:  account assistant, cost accountant, business analysts, finance consultants, operation manager </li>
</ul>
          
        </CardContent>
        <CardActions>
          <Button size="small">Apply</Button>
        </CardActions>
      </Card>
    </div></>
  );
}








