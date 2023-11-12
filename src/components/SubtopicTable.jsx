import { useState } from 'react';
import generateId from '../utils/idGenerator';
import SubtopicContainer from './SubtopicContainer';
import {useParams, Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

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
    
    <div onClick={async () => {
            let editedTopic = prompt("Please edit your topic", `${topicTitle}`)
            
            console.log(editedTopic)
            
            const currentTopic = props.topics.find(t => t.title === topicTitle)

            console.log(currentTopic);

            const editedTopicObj = { "id": currentTopic.id, "title" : editedTopic }

            try {
                const { data } = await axios.put('/api/topics', editedTopicObj)
                console.log(data) // log the response data

                let newTopics = [...props.topics]

                const index = newTopics.findIndex(topic => topic.id === editedTopicObj.id);

                newTopics = newTopics.splice(index, 1, editedTopicObj)
                
                props.setTopics(newTopics)

            } catch (error) {
                console.error('Failed to edit topic', error)
            }

            }}>
            <img src="/images/edit.png" alt="add button" className='icon'/>
            </div>

    {/* This is the delete button container that deletes the TOPIC */}
    <div className="delete-container" onClick={async () => {
        
        if (confirm('Are you sure you want to delete this topic?')) {
            
            // Deleting the topic
            const newTopics = [...props.topics]

            const index = newTopics.findIndex((topic) => topic.title === topicTitle)

            const currentTopic = newTopics[index]

            console.log(currentTopic);

            newTopics.splice(index, 1)

            await axios.delete('/api/topics', { data : {'id' : currentTopic.id }})

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
                
            }}
        
        >
            <img src="/images/plus.png" alt="add button" className='icon'/></div>
    </div>
</>
)}