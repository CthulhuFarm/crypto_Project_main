// ray test touch <
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// ray test touch >
import './index.scss';
import { Tabs } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';
import { useState } from 'react';
import BorrowContent from '../BorrowContent';

export default function DataContent(): JSX.Element {
  const [key, setKey] = useState('borrow');
  return (
    <div className='mx-3 mt-3 bg-white'>
      <Tabs
        id='controlled-tab-example'
        activeKey={key}
        onSelect={k => setKey(k)}
        className='mb-3'>
        <Tab
          eventKey='borrow'
          title='Borrowing'>
          <BorrowContent />
        </Tab>
        <Tab
          eventKey='profile'
          title='Lending'>
          <div className='mx-3 mt-3 bg-white mb-3'>This is lending</div>
        </Tab>
      </Tabs>
    </div>
  );
}
