import { useState } from 'react';

import SubtopicContainer from './SubtopicContainer';
import {useParams, Link, useNavigate} from 'react-router-dom';

export default function SubtopicsTable (props) {

const navigate = useNavigate();

let { topicTitle } = useParams();

const [subtopics, setSubtopics] = useState(props.subtopics)

return(
<>
<div className="header">
    <Link to='/'>
        <img src="/images/back.png" alt="back button" className='icon'/>
    </Link>
    <h1>{topicTitle}</h1>
    <div className="delete-container" onClick={() => {
        
        if (confirm('Are you sure you want to delete this topic?')) {
            
            const newTopics = [...props.topics]

            const index = newTopics.findIndex((topic) => topic.title === topicTitle)

            newTopics.splice(index, 1)

            props.setTopics(newTopics)
            
            navigate("/");
        }
        
    }}>
        <img src="/images/delete.png" alt="delete button" className='icon'/>
    </div>
</div>

<div className="subtopics-table">
    {subtopics.map(function(data) {
        
        // console.log(data.parentTopic)
        
        if (data.parentTopic === topicTitle){
            return(<SubtopicContainer key={data.id} subtopic={data.title} isOpen={false} setSubtopics={setSubtopics} subtopics = {subtopics}/>)
        } 

    })
    
    }
        <div><img src="/images/plus.png" alt="add button" className='icon'/></div>
</div>
</>
)}