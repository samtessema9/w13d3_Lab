/* eslint-disable no-undef */
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config(); 
require('./config/database.cjs')

const { createTweet, getTweets, updateTweet, deleteTweet } = require('./controllers/tweets.cjs')

const {createUser} = require('./controllers/userController.cjs')

const app = express();
app.use(express.json());
app.use(cors());

// CRUD - Create, Read, Update, Delete

// C
app.post('/tweets', createTweet)

app.post('/users', createUser)

// R
app.get('/tweets', getTweets)

// U send ID in params. Send update stuff in req.body
app.put('/tweets/:tweetId/:newTitle', updateTweet)

// D
app.delete('/tweets/:tweetId', deleteTweet)


app.listen(4002, () => {
    console.log("listening on 4002")
})
