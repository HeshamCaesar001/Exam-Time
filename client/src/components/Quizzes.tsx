import React from 'react';
import { Typography, Paper } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
interface QuizProps {
  quizzes: any[];
}

const Quizzes: React.FC<QuizProps> = ({ quizzes }) => {
  return (
    <Paper sx={{ 
      p: 4, 
      backgroundImage: 'url("/announcement.jpg")', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      height: '100%', 
      color: 'white' // To make text readable on the background
  }}>
      <Typography variant="h6" gutterBottom>
        Quizzes
      </Typography>
      <Grid container spacing={1}>

        {quizzes.map((quiz: any) => (
          <Grid item md={12}>
            <Card sx={{ maxWidth: 450 }} key={quiz._id}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                title={quiz.course}
                subheader={new Date(quiz.dueDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })} />
              <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {quiz.topic}
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, mb: 2 }}>
                <Button variant="contained" color="success">
                  Start Exam
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Quizzes;


