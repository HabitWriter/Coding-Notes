import express from 'express';
import morgan from 'morgan';
import ViteExpress from 'vite-express';

const app = express();
const port = '8000';

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

ViteExpress.config({ printViteDevServerHost: true });

const exampleTopicData = [
    { "id": 0, "title" : 'HTML'},
    { "id": 1, "title" : 'Javascript'},
    { "id": 2, "title" : 'CSS'},
 
  ]

  const exampleSubtopicData = [
    {"parentTopic": "HTML", "id": 0, "title" : "div", "code" : "", "notes" : "","links" : ""},
    {"parentTopic": "HTML", "id": 1, "title" : "headers", "code" : "", "notes" : "","links" : ""},
    {"parentTopic": "HTML", "id": 2, "title" : "href", "code" : "", "notes" : "","links" : ""},
    {"parentTopic": "Javascript", "id": 3, "title" : "Arrays", "code" : "", "notes" : "","links" : ""},
    {"parentTopic": "CSS", "id": 4, "title" : "background", "code" : "", "notes" : "","links" : ""},
    {"parentTopic": "CSS", "id": 5, "title" : "flexbox", "code" : "", "notes" : "","links" : ""},
  ]

// GET topic data
// /api/topics

app.get('/api/topics', (req,res) => {
    res.json(exampleTopicData)
})

// POST topic data to add a new topic
// /api/topics
// Example request: {}

// PUT topic data to change topic title
// /api/topics/:id
// Example request

// DELETE topic and all subtopics from a given topic
// api/topics/:id

// Get subtopic data
// api/subtopics

app.get('/api/subtopics', (req,res) => {
    res.json(exampleSubtopicData)
})

// POST subtopic data to add a new subtopic
// /api/subtopics

// PUT subtopic data to change subtopic title or other data
// /api/subtopics/:id

// DELETE subtopic given topic
// api/topics/:id

ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));