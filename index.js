const express=require('express');
const app=express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
const courses = [
     {id: 1, name:'course1'},
     {id :2, name: 'course2'},
     {id :3, name : 'course3'}
];

app.get('/', (req,res) => {
     res.send("Hello Aju Chechinde");
});  

app.get('/api/courses', (req,res) => {
     res.send(courses);
})


app.post('/api/courses', (req,res) => {
     try{

          const course = {
               id: courses.length + 1,
               name: req.body.name
          };
          courses.push(course);
          res.send(course);   
     }catch(e){
          res.status(500).json({message:"Error"});
     }
});

app.get('/api/courses/:id', (req,res) => {
     const course=courses.find(c => c.id === parseInt(req.params.id));
     if(!course) res.status(404).send('The course with the given id was not found');
     res.send(course);
});

const port=process.env.PORT || 3000
app.listen(port, () => console.log(`Listenting to port ${port}`));