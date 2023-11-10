import { useState } from 'react';
import TopicButton from './TopicButton';
import { Link } from 'react-router-dom';

export default function TopicsTable (props) {
    return(
        <div className="topics-table">
            {props.topicData.map(function(data) {
                return (
                    <Link to={`/topic/${data.title}`} style={{ textDecoration: 'none' }}>
                        <TopicButton topic={data.title}/>
                    </Link>
                )
            })}

            {/* <TopicButton topic='HTML' />
            <TopicButton topic='Javascript' />
            <TopicButton topic='CSS' /> */}
            <div><img src="src/images/plus.png" alt="add button" className='icon'/></div>
        </div>
    )
}