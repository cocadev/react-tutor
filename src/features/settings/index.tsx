import React, { useState } from 'react';
import { Box, Divider, Tab, Tabs, Typography } from '@material-ui/core';
import General from './General';
import Subscription from './Subscription';
import Notifications from './Notifications';
import Security from './Security';

function AccountView() {
  const [currentTab, setCurrentTab] = useState('general');
  const tabs = [
    { value: 'general', label: 'General' },
    { value: 'subscription', label: 'Subscription' },
    { value: 'notifications', label: 'Notifications' },
    { value: 'security', label: 'Security' },
  ];

  const handleTabsChange = (event: React.ChangeEvent<Record<string, string>>, value: string) => {
    setCurrentTab(value);
  };

  return (
    <Box pt={6}>
      <Typography variant="h2">Settings</Typography>
      <Box mt={3}>
        <Tabs
          onChange={handleTabsChange}
          scrollButtons="auto"
          value={currentTab}
          variant="scrollable"
          textColor="secondary"
        >
          {tabs.map(tab => (
            <Tab key={tab.value} label={tab.label} value={tab.value} />
          ))}
        </Tabs>
      </Box>
      <Divider />
      <Box mt={3}>
        {currentTab === 'general' && <General />}
        {currentTab === 'subscription' && <Subscription />}
        {currentTab === 'notifications' && <Notifications />}
        {currentTab === 'security' && <Security />}
      </Box>
    </Box>
  );
}
export default AccountView;
