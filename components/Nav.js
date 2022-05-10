import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export function Nav() {
  return (
    <Tabs aria-label="wrapped label tabs example" variant='fullWidth' indicatorColor='secondary' centered>
  <Tab value="one" label ="write trip diary"  wrapped />
  <Tab value="two" label ="show trip list" />
  <Tab value="three" label="revise trip diary " />
  <Tab value="four" label="delete trip diary " />
</Tabs>
  );
}

/** 
const sections = [
  { title: '기록 작성', url: '/board/write' },
  { title: '기록 조회', url: '/board/list' },
  { title: '기록 수정', url: '/board/update' },
  { title: '기록 삭제', url: '/board/delete' }
];
*/
