import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './pgdm.css';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Pgdm() {
  return (
    <><div className='mb'><img className='img'src='https://indiraisbs.ac.in/assets/images/BlogImages/A-roadmap-01-1.jpg'></img>
      
      <Card sx={{ minWidth: 650, marginLeft: 8,marginTop:12}}>
        <CardContent>
          <h1 className='cd'>Course Details</h1>
          <ul className='poi'>
  <li>PGDM Full Form: Post Graduate Diploma in Management</li><br></br>
  <li>PGDM  Course Level: Post Graduation Degree Course</li><br></br>
  <li>Duration of PGDM : Full Time PGDM : 2 Years</li><br></br>
  <li>Top PGDM  Entrance Exams: MAT, CAT, XAT, and more..</li><br></br>
  <li>PGDM  Eligibility: Graduation in any stream</li><br></br>
  <li>PGDM Package: INR 3,00,000 – INR 10,00,000</li><br></br>
  <li>PGDM  Specializations:  Administrative Officer, Business Consultant, Finance Manager</li>
</ul>
          
        </CardContent>
        <CardActions>
          <Button size="small">Apply</Button>
        </CardActions>
      </Card>
    </div></>
  );
}








