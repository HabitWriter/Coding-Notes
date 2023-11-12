import { useState } from 'react';
import TopicButton from './TopicButton';
import { Link } from 'react-router-dom';
import generateId from '../utils/idGenerator';
import axios from 'axios';

export default function TopicsTable (props) {
    return(
        <div className="topics-table">
            {props.topicData.map(function(data) {
                return (
                    <Link to={`/topic/${data.title}`} className='topic-button' key={data.id}>
                        <TopicButton topic={data.title}/>
                    </Link>
                )
            })}


            <div onClick={async () => {
            let newTopic = prompt("Please enter your new topic")
            let newId = generateId()

            let newTopics = [...props.topicData, { "id" : newId, "title" : newTopic }]

            console.log(newTopics)
            console.log(props.topicData)

            try {
                const { data } = await axios.post('/api/topics', { "id": newId, "title" : newTopic })
                console.log(data) // log the response data

                // Update the state only after the post request is successful
                props.setTopicData(newTopics)
            } catch (error) {
                console.error('Failed to create topic', error)
            }
            }}>
            <img src="/images/plus.png" alt="add button" className='icon'/>
            </div>
        </div>
    )
}