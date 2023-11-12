import './App.css';
import MainWindow from './components/MainWindow.jsx';
import { Routes, Route } from 'react-router-dom';
import SubtopicsTable from './components/SubtopicTable.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';

const TEST_DATA = [];

function App({ initialTopics }) {

  const [topics, setTopics] = useState(initialTopics)
  const [subtopics, setSubtopics] = useState([]);

  useEffect(() => {
    axios.get('/api/subtopics')
      .then(res => {
        setSubtopics(res.data);
        // console.log(res.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);
  

  return (
  <Routes>
    <Route path='/' element = {<MainWindow topicData={topics}/>} />
    <Route path='/topic/:topicTitle' element = {<SubtopicsTable subtopics = {subtopics} setSubtopics = {setSubtopics} topics = {topics} setTopics = {setTopics}/>} />
  </Routes>
  )
}

export default App;
