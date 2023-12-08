import { Box, Grid, styled } from '@mui/material';

export const MovieCardContainer = styled(Grid)(() => ({
  display: 'flex',
  justifyContent: 'center',
  maxWidth: "800px",
  alignItems: "center",
  marginTop: "20px"
}));

export const MovieInfoBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '40px',
  marginRight: '40px',
}));

export const MovieInfoItemBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export const MoviePosterImage = styled('img')(({theme}) => ({
  width: '90%',
  height: 'auto',
  borderRadius: theme.shape.borderRadius
}));

export const VerticalLine = styled(Box)(({ theme }) => ({
  height: '70px',
  width: '3px',
  backgroundColor: theme.palette.primary[800],
  marginRight: '10px',
  marginLeft: '-10px',
}));