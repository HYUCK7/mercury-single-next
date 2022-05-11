import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box'

export function Nav() {
  return (
<Box>
    <Tabs
        aria-label="wrapped label tabs example"
        variant='fullWidth'
        indicatorColor='secondary'
        centered="centered">
        <Tab label="write trip diary" wrapped="wrapped" href= '/trip/write'/>
        <Tab label="show trip list" href= '/trip/read'/>
        <Tab label="revise trip diary " href= '/trip/update'/>
        <Tab label="delete trip diary " href= '/trip/delete'/>
    </Tabs>
</Box>
  );
}
