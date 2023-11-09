import { useState } from 'react';
import TopicButton from './TopicButton';

export default function TopicsTable () {

return(
<div className="topics-table">
    <TopicButton topic='HTML' />
    <TopicButton topic='Javascript' />
    <TopicButton topic='CSS' />
        <div><img src="src/images/plus.png" alt="back button" className='icon'/></div>
</div>

)}