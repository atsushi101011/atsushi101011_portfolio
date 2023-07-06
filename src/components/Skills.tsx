import React from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const StyledCard = styled(Card)(({ theme }) => ({
  width: 730,
  maxWidth: '100%',
}));

const Skills = () => {
  return (
    <Box p={2}>
      <Box display='flex' justifyContent='center' p={1}>
        <Typography variant='h4' color='#3f51b5'>
          Skills
        </Typography>
      </Box>
      <Box display='flex' justifyContent='center' p={1}>
        <StyledCard>
          <CardContent>
            <Typography variant="h6">
              言語
            </Typography>
            <Typography color="textSecondary">
              Ruby / PHP / JavaScript / TypeScript
            </Typography>
          </CardContent>
        </StyledCard>
      </Box>
      <Box display='flex' justifyContent='center' p={1}>
        <StyledCard>
          <CardContent>
            <Typography variant="h6">
              フレームワーク
            </Typography>
            <Typography color="textSecondary">
              Ruby on Rails / Sinatra / Laravel / React
            </Typography>
          </CardContent>
        </StyledCard>
      </Box>
      <Box display='flex' justifyContent='center' p={1}>
        <StyledCard>
          <CardContent>
            <Typography variant="h6">
              データベース
            </Typography>
            <Typography color="textSecondary">
              MySQL / PostgreSQL
            </Typography>
          </CardContent>
        </StyledCard>
      </Box>
      <Box display='flex' justifyContent='center' p={1}>
        <StyledCard>
          <CardContent>
            <Typography variant="h6">
              AWS
            </Typography>
            <Typography color="textSecondary">
              EC2 / ECS / ECR / Lambda / SQS / SNS / Elastic Beanstalk / S3 / Cloud9 / CloudWatch / CloudFormation / RDS / Route53
            </Typography>
          </CardContent>
        </StyledCard>
      </Box>
    </Box>
  );
};

export default Skills;