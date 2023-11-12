import { useState } from 'react';
import './MainWindow.css';
import TopicsTable from './TopicsTable';
import SubtopicContainer from './SubtopicContainer';
import SubtopicsTable from './SubtopicTable';

export default function MainWindow(props) {

  const [topicData, setTopicData] = useState(props.topicData)
  
  
  return (
    <div>

      {/* This is where the header component will live */}
      <div className="header">
      <h1>Notes</h1> 
      </div>
      {/* Now for the Topics Table */}
      <TopicsTable topicData = {topicData} setTopicData = {setTopicData}/>

    </div>
  );
}


