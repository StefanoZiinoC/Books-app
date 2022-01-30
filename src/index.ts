import express from 'express';
import path from 'path';
import exphbs from 'express-handlebars';
import { engine } from 'express-handlebars';
// importing routes
import IndexRoutes from './routes';
import BooksRoutes from './routes/books';



// Initializations
const app = express();
import './database';


//setings 
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    defaultLayout: 'main',
    helpers: require('./lib/helpers')
    
}));
app.set('view engine', '.hbs');

//Widdlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/', IndexRoutes)
app.use('/books', BooksRoutes);


// Static files
app.use(express.static(path.join(__dirname, 'public')));


// Strating the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});