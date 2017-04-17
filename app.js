const express = require('express')

const linkQeury = require('./db/linkquery')

const bodyParser = require('body-parser')

const app = express()

const port = process.env.PORT || 3001

app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

app.use(express.static('public'))

app.get('/', (req, res) => {
  linkQeury.getAll()
  .then(data => {
    res.render('index', {data})
  })

})

app.post('/add-link', (req, res) => {
  linkQeury.add(req.body)
  .then(()=> {
    res.redirect('/')
  })
})

app.post('/upvote/:id', (req, res) => {
  linkQeury.vote(req.params.id)
  .then(()=> {
    res.redirect('/')
  })
})

app.post('/downvote/:id', (req, res) => {
  linkQeury.downVote(req.params.id)
  .then(()=> {
    res.redirect('/')
  })
})

app.listen(port, () => {
  console.log(`listening on ${port}`);
})
