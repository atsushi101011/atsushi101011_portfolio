// import React from 'react';
// import { styled } from '@mui/system';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import FolderIcon from '@mui/icons-material/Folder';
// import Card from '@mui/material/Card'
// import CardActions from '@mui/material/CardActions'
// import CardContent from '@mui/material/CardContent'
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button'


// const LargeAvatar = styled(Avatar)(({ theme }) => ({
//   // 表示サイズを指定
//   width: theme.spacing(30),
//   height: theme.spacing(30),
// }));

// const Works = () => {
//   return (
//     <Box p={2}>
//       <Box display='flex' justifyContent='center' p={1}>
//         <Typography variant='h4' color='#3f51b5'>
//           Works
//         </Typography>
//       </Box>
//       <Box sx={{ maxWidth: 300 }} display='flex' justifyContent='center'>
//         <Card sx={{ minWidth: 275 }}>
//           <CardContent>
//             <Typography variant="h5" component="div" align='center'>
//               登山クイズ
//             </Typography>
//             <Typography sx={{ mb: 1.5 }} color="text.secondary">
//               <LargeAvatar
//                 alt='yama_quiz'
//                 src={ImageFile}
//                 variant='rounded'
//               />
//             </Typography>
//             <Typography variant="body2">
//               Rails API + Vue.jsで、SPAのクイズアプリを作りました。
//               <br />
//             </Typography>
//           </CardContent>
//           <CardActions>
//             <Button size="small" href="https://yama-quiz.herokuapp.com/">Learn More</Button>
//           </CardActions>
//         </Card>
//       </Box>
//     </Box>
//   );
// };

// export default Works;


import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import ImageFile from '../static/images/yama_quiz.png';

const Work = () => {
  return (
    <Box p={2}>

      <Box display='flex' justifyContent='center' p={1}>
        <Typography variant='h4' color='#3f51b5'>
          Works
        </Typography>
      </Box>

      <Box sx={{display: 'flex', flexDirection: 'row'}} justifyContent='center'>
  
      <Box sx={{ maxWidth: 300, m: 2 }}>
        <Card>
          <CardMedia
            component="img"
            height="200"
            src={ImageFile}
            alt="Thumbnail"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              登山クイズ
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Rails API + Vue.jsで作成<br />
              SPAのクイズアプリ
            </Typography>
          </CardContent>
          <Button href="https://yama-quiz.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            Learn More
          </Button>
        </Card>
      </Box>
      <Box sx={{ maxWidth: 300, m: 2 }} display='flex' justifyContent='center'>
        <Card>
          <CardMedia
            component="img"
            height="200"
            src={ImageFile}
            alt="Thumbnail"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              登山クイズ
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Rails API + Vue.jsで作成<br />
              SPAのクイズアプリ
            </Typography>
          </CardContent>
          <Button href="https://yama-quiz.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            Learn More
          </Button>
        </Card>
      </Box>
      </Box>
    </Box>
  );
};

export default Work;
