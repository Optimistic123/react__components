const router = require('express').Router();
let Student = require('../models/student.model');


//home route
router.route('/').get((req, res) => {
  Student.find()
    .then(students => res.json(students))
    .catch(err => res.status(400).json('Error: ' + err));
});


//add route-- post route
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const contactNo = Number(req.body.contactNo);
  const cv = req.body.cv;

  const newStudent = new Student({
    username,
    email,
    contactNo,
    cv
  });

  newStudent.save()
  .then(() => res.json('Student added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

//get route  /:id -- is like a variable
router.route('/:id').get((req, res) => {
  Student.findById(req.params.id)
    .then(student => res.json(student))
    .catch(err => res.status(400).json('Error: ' + err));
});


//delete route
router.route('/:id').delete((req, res) => {
  Student.findByIdAndDelete(req.params.id)
    .then(() => res.json('Student deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//update route
router.route('/update/:id').post((req, res) => {
  Student.findById(req.params.id)
    .then(student => {
      student.username = req.body.username;
      student.email = req.body.email;
      student.contactNo = Number(req.body.contactNo);
      cv = req.body.cv;

      student.save()
        .then(() => res.json('Student updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
