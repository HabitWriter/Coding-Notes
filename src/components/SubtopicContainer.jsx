import { useState } from 'react';


export default function SubtopicContainer (props) {
    
    const [isOpen, setIsOpen] = useState(false)

    if (isOpen) { 
    
    return (
        <div className="subtopic-container">
            
            <div className="open-subtopic-header">
                <h2 onClick={() => setIsOpen(false)}>{props.subtopic}</h2>
                <img src="src/images/delete.png" alt="back button" className='icon'/>
            </div>
            
            <hr />
            
            <div className="subtopic-middle-container">
                <div className="code-example-container">    
                    <h3>Code Example</h3>
                    <textarea name="CodeExample" id="CodeExample" cols="20" rows="10"></textarea>
                </div>
                <div className="notes-container">
                    <h3>Notes</h3>
                    <textarea name="Notes" id="Notes" cols="20" rows="10"></textarea>
                </div>
            </div>

            <hr />
            
            <div className="links-container">
                <h3>Links</h3>
                <textarea name="Links" id="Links" cols="50" rows="10"></textarea>
            </div>
        </div>
        )
    
    } else {
        return(
            <div className="subtopic-container" onClick={() => setIsOpen(true)}>
                <h2>{props.subtopic}</h2>
            </div>
        )
    }
}