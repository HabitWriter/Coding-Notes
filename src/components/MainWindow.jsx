import { useState } from 'react';
import './MainWindow.css';
import TopicsTable from './TopicsTable';
import SubtopicContainer from './SubtopicContainer';
import SubtopicsTable from './SubtopicTable';

export default function MainWindow() {
  
  const exampleTopicData = [
    { "id": 0, "title" : 'HTML', "subtopics" : [0,1,2]},
    { "id": 1, "title" : 'Javascript', "subtopics" : [3]},
    { "id": 2, "title" : 'CSS', "subtopics" : [4,5]},
 
  ]

  const exampleSubtopicData = [
    {"id": 0, "title" : "div", "code" : "", "notes" : "","links" : ""},
    {"id": 1, "title" : "headers", "code" : "", "notes" : "","links" : ""},
    {"id": 2, "title" : "href", "code" : "", "notes" : "","links" : ""},
    {"id": 3, "title" : "Arrays", "code" : "", "notes" : "","links" : ""},
    {"id": 4, "title" : "background", "code" : "", "notes" : "","links" : ""},
    {"id": 5, "title" : "flexbox", "code" : "", "notes" : "","links" : ""},
  ]

  const [isSubtopicOpen, setIsSubtopicOpen] = useState(false)
  const [topicData, settopicData] = useState(exampleTopicData)
  console.log(topicData);
  
  if (isSubtopicOpen) {
    return (
      <div>
  
        {/* This is what the showSubtopics display will be */}
  
        <div className="header">
          <img src="src/images/back.png" alt="back button" className='icon'/>
          <h1>HTML</h1>
        </div>
  
        {/* Now for the Topics Table */}
        <SubtopicsTable />
  
      </div>
    );
  } else {
    return (
      <div>
  
        {/* This is where the header component will live */}

        <h1>Notes</h1> 
        {/* Now for the Topics Table */}

        <TopicsTable topicData = {topicData}/>
  
      </div>
    );
  }
  
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


