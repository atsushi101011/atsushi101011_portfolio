import React from 'react';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

// 画像ファイルをインポート
import ImageFile from '../static/images/my_avatar.jpg';

const LargeAvatar = styled(Avatar)(({ theme }) => ({
  // 表示サイズを指定
  width: theme.spacing(30),
  height: theme.spacing(30),
}));

const MyAvatar = () => {
  return (
    <Box p={2}>
      <Box display='flex' justifyContent='center' p={1}>
        <LargeAvatar
          alt='Atsushi Takagi'
          src={ImageFile}
        />
      </Box>
      <Box display='flex' justifyContent='center' p={1}>
        <Typography variant='h5'>
          Atsushi Takagi
        </Typography>
      </Box>
      <Box display='flex' justifyContent='center' p={1}>
        <Typography variant='body1' align='center'>
          University of Hyogo <br />
          Web Engineer
        </Typography>
      </Box>
    </Box>
  );
};

export default MyAvatar;
