import { useState } from 'react';
import './MainWindow.css';
import TopicsTable from './TopicsTable';
import SubtopicContainer from './SubtopicContainer';
import SubtopicsTable from './SubtopicTable';

export default function MainWindow() {
  

  return (
    <div>

      {/* This is where the header component will live */}
      <h1>Notes</h1> 
      {/* Now for the Topics Table */}
      <TopicsTable />

      {/* This is what the showSubtopics display will be */}

      <div className="header">
        <img src="src/images/back.png" alt="back button" className='icon'/>
        <h1>HTML</h1>
      </div>

      {/* Now for the Topics Table */}
      <SubtopicsTable />

    </div>
  );
}


