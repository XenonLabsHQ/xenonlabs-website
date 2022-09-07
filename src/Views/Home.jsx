import React from 'react';
import Header from '../Common/Components/Modules/Header'
import Landing from '../Common/Components/Modules/Landing'
import Staff from '../Common/Components/Modules/Staff'
import WorkFlow from '../Common/Components/Modules/WorkFlow'

export default function Home() {
  return (
      <>
        <Landing />
        <WorkFlow />
        <Staff />
      </>
  );
}