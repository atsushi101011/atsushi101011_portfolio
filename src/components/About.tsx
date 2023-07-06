import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const About: React.FC = () => {
  return (
    <>
      <Box p={2}>
        <Box display='flex' justifyContent='center' p={1}>
          <Typography variant='h4' color='#3f51b5'>
            About
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1}>
          <Typography variant='body1' align='center'>
            高木淳史。兵庫県生まれ。兵庫県立大学 工学部 情報工学科4年。<br />
            2024年3月に卒業予定。Webエンジニアとして就職活動中です。<br />
            関心のある業界領域は、AgriTech、自然産業、ヘルスケアなど。<br />
            長野県の標高1500mにある、自然豊かな乗鞍高原に移住した経験があり、そこから一次産業×DXや地方創生に関心があります。
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default About;
