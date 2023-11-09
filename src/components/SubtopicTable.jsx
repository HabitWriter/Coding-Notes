import { useState } from 'react';
import TopicButton from './TopicButton';
import SubtopicContainer from './SubtopicContainer';

export default function SubtopicsTable () {

return(
<div className="subtopics-table">
    <SubtopicContainer subtopic='h tags' isOpen='true'/>
    <SubtopicContainer subtopic='divs' isOpen='false'/>
    <SubtopicContainer subtopic='img' isOpen='true'/>
        <div><img src="src/images/plus.png" alt="back button" className='icon'/></div>
</div>

)}