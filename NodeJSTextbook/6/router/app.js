const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

const indexRouter = require('./');
const userRouter = require('./user');

dotenv.config();
const app = express();
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
	resave: false,
	saveUninitialized: false,
	secret: process.env.COOKIE_SECRET,
	cookie: {
		httpOnly: true,
		secure: false,
	},
	name: 'session-cookie',
}));
app.use('/', indexRouter);
app.use('/user', userRouter);

app.use((req, res, next) => {
	res.status(404).send('Not Found');
	
	next();
})

app.use((req, res, next) => {
	console.log('모든 요청에 다 실행됩니다.');
	
	next();
});

app.listen(3000);