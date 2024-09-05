import React from 'react'
import { Typography, Button, Paper } from '@mui/material';

function Panel() {
    return (
        <Paper  sx={{
            p: 2,
            backgroundImage: 'url("/study.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '79%',
            color: 'white' 
        }} >
            <Typography variant="h4" gutterBottom>
                EXAMS TIME
            </Typography>

            <Typography variant="h6" gutterBottom>
                noun. any of several Old World finches of the genus Serinus, especially S. canaria(common canary ), native to the Canary Islands and often kept as a pet, in the wild being greenish with brown streaks above and yellow below and in domesticated varieties usually bright yellow or pale yellow.            </Typography>

            <Button variant="contained" color="success">
                View Exams Tips
            </Button>
        </Paper>
    )
}

export default Panel