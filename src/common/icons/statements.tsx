import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import React from 'react';

const Statements: React.FC<SvgIconProps> = props => (
  <SvgIcon {...props} viewBox="0 0 48 48" width="48px" height="48px">
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 19 20">
      <path d="M12.91 0c3.182 0 5.257 2.142 5.257 5.357h0v9.196c0 3.197-2.057 5.335-5.22 5.354h0l-7.69.003c-3.182 0-5.256-2.14-5.256-5.357h0V5.357C.001 2.16 2.057.023 5.22.004h0zm0 1.5l-7.685.004C2.902 1.518 1.5 2.974 1.5 5.357h0v9.196c0 2.398 1.414 3.857 3.756 3.857l7.685-.003c2.323-.014 3.725-1.47 3.725-3.854h0V5.357c0-2.397-1.414-3.857-3.757-3.857h0zm-.193 11.974a.75.75 0 0 1 .102 1.493l-.102.007h-7.22a.75.75 0 0 1-.102-1.493l.102-.007h7.22zm0-4.187a.75.75 0 0 1 .102 1.493l-.102.007h-7.22a.75.75 0 0 1-.102-1.493l.102-.007h7.22zM8.25 5.1a.75.75 0 0 1 .102 1.493L8.25 6.6H5.496a.75.75 0 0 1-.102-1.493l.102-.007H8.25z" />
    </svg>
  </SvgIcon>
);

export default Statements;
