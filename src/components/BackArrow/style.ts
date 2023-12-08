import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, styled } from '@mui/material';

export const BackArrowContainer = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "flex-start"
}));

export const ArrowIcon = styled(ArrowBackIcon)(({ theme }) => ({
  color: theme.palette.secondary[100],
  cursor: "pointer",
}));