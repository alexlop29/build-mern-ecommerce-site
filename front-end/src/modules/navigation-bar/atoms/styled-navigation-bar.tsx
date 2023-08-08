import { AppBar } from '@mui/material';
import styled from '@emotion/styled';

// NOTE: (Alopez) Observation: It only wraps around the box.
const StyledAppBar = styled(AppBar)`
  background: #EEEE02;
  position: fixed;
  top: 0;
  width: 100%;
  height: 95px;
  padding: 10px;
  color: black;
`;

export { StyledAppBar }
