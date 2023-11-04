import { useState } from 'react';
import './MainWindow.css';

export default function MainWindow() {
  

  return (
    <div>

      {/* This is where the header component will live */}
      <h1>Notes</h1> 
      {/* Now for the Topics Table */}
      <div className="topics-table">
        <div className="topic-button">
          <h2>HTML</h2>
        </div>
        <div className="topic-button">
          <h2>Javascript</h2>
        </div>
        <div className="topic-button">
          <h2>CSS</h2>
        </div>
        <img src="src/images/plus.png" alt="back button" className='icon'/>
      </div>

      {/* This is what the showSubtopics display will be */}

      <div className="header">
        <img src="src/images/back.png" alt="back button" className='icon'/>
        <h1>HTML</h1>
      </div>

      {/* Now for the Topics Table */}
      <div className="subtopics-table">
        <div className="subtopic-container">
          <h2>h tags</h2>
        </div>
        <div className="subtopic-container">
          <h2>divs</h2>
        </div>
        <div className="subtopic-container">
          <h2>img</h2>
        </div>
        <img src="src/images/plus.png" alt="back button" className='icon'/>
        
      </div>

    </div>
  );
}


