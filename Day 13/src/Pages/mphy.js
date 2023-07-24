import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './mphy.css';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Mphy() {
  return (
    <><div className='mb'><img className='img'src='https://blogger.googleusercontent.com/img/a/AVvXsEjjq1k71tq4QxhvkTEJh4vp7DUIvnA0p699LswU47GkeF3FXxqZ7sfA2cGM8bbBvSEZLPhEpmzbh3ymMVfMcZzCzStYkn8bZg56p0RcgMgVo1Qo-6n0H8iohNaf3tfNzBcWsAPGaFertt_1rmuNzza_8ZuOL3UVDagOqP_xaqlM5kjpqlUfe_jZnh0D=w1600'></img>
      
      <Card sx={{ minWidth: 650, marginLeft: 8,marginTop:12}}>
        <CardContent>
          <h1 className='cd'>Course Details</h1>
          <ul className='poi'>
  <li>Msc.Phy Full Form: Master in Physics</li><br></br>
  <li>Msc.Phy Course Level: Post Graduation Degree Course</li><br></br>
  <li>Duration of Msc.Phy: Full Time Msc.Phy: 2 Years; Integrated LLB: 5 Years</li><br></br>
  <li>Top Msc.Phy Entrance Exams: CUET PG,BITSAT,NEST,IIT JAM.</li><br></br>
  <li>Msc.Phy Eligibility: A candidate should come to the course after a minimum of 10+2+3 years of continuous study with 55%</li><br></br>
  <li>Msc.Phy Package: INR 30,000 – INR 2,00,000</li><br></br>
  <li>Msc.Phy Specializations:  MSc Physics scope has equal demands in the industry, Research and academic fields</li>
</ul>
          
        </CardContent>
        <CardActions>
          <Button size="small">Apply</Button>
        </CardActions>
      </Card>
    </div></>
  );
}








