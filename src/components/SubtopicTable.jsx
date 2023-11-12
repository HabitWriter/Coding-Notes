import { forceUpdate, useState } from 'react';
import generateId from '../utils/idGenerator';
import SubtopicContainer from './SubtopicContainer';
import {useParams, Link, useNavigate} from 'react-router-dom';

export default function SubtopicsTable (props) {

const navigate = useNavigate();

let { topicTitle } = useParams();

const [subtopics, setSubtopics] = useState(props.subtopics)

return(
<>
<div className="header">
    
    {/* This is the back button */}
    <Link to='/'>
        <img src="/images/back.png" alt="back button" className='icon'/>
    </Link>
    
    <h1>{topicTitle}</h1>
    
    {/* This is the delete button container that deletes the TOPIC */}
    <div className="delete-container" onClick={() => {
        
        if (confirm('Are you sure you want to delete this topic?')) {
            
            // Deleting the topic
            const newTopics = [...props.topics]

            const index = newTopics.findIndex((topic) => topic.title === topicTitle)

            newTopics.splice(index, 1)

            props.setTopics(newTopics)

            // Deleting the subtopics associated with topic
            const subtopics = [...props.subtopics]

            const newSubtopics = subtopics.filter((subtopic) => {
                return subtopic.parentTopic !== topicTitle 
            })

            setSubtopics(newSubtopics);

            console.log(newSubtopics);
            
            navigate("/");
        }
        
    }}>
        <img src="/images/delete.png" alt="delete button" className='icon'/>
    </div>
</div>

{/* This is the subtopics table */}

<div className="subtopics-table">
    {subtopics.map(function(data) {
        
        // console.log(data.parentTopic)
        
        if (data.parentTopic === topicTitle){
            return(<SubtopicContainer key={data.id} subtopic={data.title} isOpen={false} setSubtopics={setSubtopics} subtopics = {subtopics} data = {data}/>)
        } 

    })
    
    }
    <div onClick={() => {
                let newSubtopic = prompt("Please enter your new subtopic")
                
                let newSubtopics = [...props.subtopics]

                newSubtopics.push({ 
                    
                    "parentTopic" : topicTitle,
                    "id" : generateId(),
                    "title" : newSubtopic,
                    "code" : "",
                    "notes" : "",
                    "links" : "",
                                     
                    })

                console.log(newSubtopics);

                props.setSubtopics(newSubtopics);
                forceUpdate();
            }}
        
        >
            <img src="/images/plus.png" alt="add button" className='icon'/></div>
    </div>
</>
)}