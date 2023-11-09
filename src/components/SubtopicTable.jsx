import { useState } from 'react';
import TopicButton from './TopicButton';
import SubtopicContainer from './SubtopicContainer';

export default function SubtopicsTable () {

return(
<div className="subtopics-table">
    <SubtopicContainer subtopic='h tags' />
    <SubtopicContainer subtopic='divs' />
    <SubtopicContainer subtopic='img' />
        <div><img src="src/images/plus.png" alt="back button" className='icon'/></div>
</div>

)}