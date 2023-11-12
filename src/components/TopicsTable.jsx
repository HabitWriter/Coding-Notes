import { useState } from 'react';
import TopicButton from './TopicButton';
import { Link } from 'react-router-dom';

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

            <div onClick={() => {
                let newTopic = prompt("Please enter your new topic")
                console.log(newTopic);
            }}>
                <img src="/images/plus.png" alt="add button" className='icon'/></div>
        </div>
    )
}