import './App.css';
import MainWindow from './components/MainWindow.jsx';
import { Routes, Route } from 'react-router-dom';
import SubtopicsTable from './components/SubtopicTable.jsx';

const TEST_DATA = [];

function App({ initialTopics }) {

  const exampleTopicData = [
    { "id": 0, "title" : 'HTML'},
    { "id": 1, "title" : 'Javascript'},
    { "id": 2, "title" : 'Conner'},
 
  ]

  const exampleSubtopicData = [
    {"parentTopic": "HTML", "id": 0, "title" : "div", "code" : "", "notes" : "","links" : ""},
    {"parentTopic": "HTML", "id": 1, "title" : "headers", "code" : "", "notes" : "","links" : ""},
    {"parentTopic": "HTML", "id": 2, "title" : "href", "code" : "", "notes" : "","links" : ""},
    {"parentTopic": "Javascript", "id": 3, "title" : "Arrays", "code" : "", "notes" : "","links" : ""},
    {"parentTopic": "CSS", "id": 4, "title" : "background", "code" : "", "notes" : "","links" : ""},
    {"parentTopic": "CSS", "id": 5, "title" : "flexbox", "code" : "", "notes" : "","links" : ""},
  ]


  return (
  <Routes>
    <Route path='/' element = {<MainWindow topicData={initialTopics}/>} />
    <Route path='/topic/:topicTitle' element = {<SubtopicsTable subtopicData = {exampleSubtopicData}/>} />
  </Routes>
  )
}

export default App;
