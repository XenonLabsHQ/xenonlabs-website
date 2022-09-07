import React from 'react';
import Header from '../Common/Components/Modules/Header'
import Landing from '../Common/Components/Modules/Sections/Landing'
import Staff from '../Common/Components/Modules/Sections/Staff'
import WorkFlow from '../Common/Components/Modules/Sections/WorkFlow'

export default function Home() {
  return (
      <>
        <Landing />
        <WorkFlow />
        <Staff />
      </>
  );
}