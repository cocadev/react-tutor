import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import React from 'react';

const Campaigns: React.FC<SvgIconProps> = props => (
  <SvgIcon {...props} viewBox="0 0 48 48" width="48px" height="48px">
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22 22">
      <path d="M15.686.25c3.646 0 6.064 2.598 6.064 6.335h0v8.83c0 3.737-2.42 6.335-6.064 6.335h0-9.37C2.67 21.75.25 19.152.25 15.415h0v-8.83C.25 2.85 2.675.25 6.314.25h0zm0 1.5h-9.37c-2.786 0-4.564 1.907-4.564 4.835h0v8.83c0 2.932 1.772 4.835 4.564 4.835h9.37c2.792 0 4.564-1.903 4.564-4.835h0v-8.83c0-2.932-1.772-4.835-4.564-4.835h0zM6.37 8.452a.75.75 0 0 1 .743.648l.007.102v6.86a.75.75 0 0 1-1.493.102l-.007-.102v-6.86a.75.75 0 0 1 .75-.75zm4.667-3.283a.75.75 0 0 1 .743.648l.007.102v10.143a.75.75 0 0 1-1.493.102l-.007-.102V5.92a.75.75 0 0 1 .75-.75zm4.59 6.908a.75.75 0 0 1 .743.648l.007.102v3.235a.75.75 0 0 1-1.493.102l-.007-.102v-3.235a.75.75 0 0 1 .75-.75z" />
    </svg>
  </SvgIcon>
);

export default Campaigns;
