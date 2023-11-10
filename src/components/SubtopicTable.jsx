import { useState } from 'react';
import TopicButton from './TopicButton';
import SubtopicContainer from './SubtopicContainer';
import {useParams, Link} from 'react-router-dom';

export default function SubtopicsTable (props) {

let { topicTitle } = useParams();

console.log(topicTitle);

return(
<>
<div className="header">
    <Link to='/'>
    <img src="/images/back.png" alt="back button" className='icon'/>
    </Link>
    <h1>{topicTitle}</h1>
  </div>

<div className="subtopics-table">
    {props.subtopicData.map(function(data) {
        console.log(data.parentTopic)
        if (data.parentTopic === topicTitle){
            return(<SubtopicContainer subtopic={data.title} isOpen='true'/>)
        } 

    })
    // <SubtopicContainer subtopic='h tags' isOpen='true'/>
    }
        <div><img src="/images/plus.png" alt="add button" className='icon'/></div>
</div>
</>
)}