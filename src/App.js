
import './App.css';
import { Box } from '@mui/material';
import Error from './components/Error';
import Button from './components/button';
import SubjectBar from './components/SubjectBar';
import NavBar  from './components/NavBar';
import LogInform from './forms/LogInForm';
import SubjForm from './forms/SubjForm';
import BookForm from './forms/BookForm';
import Book from './components/Book';
import SelectSubj from './components/AdminSelectSubj';
import SelectBook from './components/AdminSelectBook';
import Login  from './views/Login';
import AdminBook from './views/AdminBook';
import AdminSubject from './views/AdminSubject';
import BuildList from './views/BuildList';
import BookBrowser from './components/BookBrowser';
import ListItem from './components/List/ListItem';
import Index from './components/List/ListPage';
import BookList from './views/BookList';
import SnackBar from './components/SnackBar'
import {Route, Routes} from 'react-router-dom';
import AddRemoveBook from '/Users/jodysheffield/Documents/Week8/Wk8D1PM/ReactBookstore/src/components/List/AddRemoveBook.js';
import RegisterForm from './forms/RegisterForm';

const HomePage = () => (<h1>|`|`| Jobu |`|`| Books |`|`|</h1>);

function App() {
  return (
    <>
    <SnackBar/>
      <NavBar>
      <SubjectBar/>
        <Box>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<RegisterForm/>}/>
            {/* <Route path="/editprofile" element={<EditProfile/>}/> */}
            <Route path="/book" element={<Book/>}/>
            <Route path="/buildlist" element={<BuildList/>}/>
            <Route path="/booklist" element={<BookList/>}/>
            <Route path="/bookbrowser" element={<BookBrowser />}/>
            <Route path="/adminbook" element={<AdminBook/>}/>
            <Route path="/adminsubject" element={<AdminSubject/>}/>
            <Route path="/selectbook" element={<SelectBook/>}/>
            <Route path="/selectsubj" element={<SelectSubj/>}/>
            {/* <Route path="/addremovebook" element={<AddRemoveBook/>}/> */}
            
          </Routes>
        </Box>
      </NavBar>
      </>
  )
}

export default App;

  {/* <SelectBook />  */}
  {/* <SelectSubj /> */}
  {/* <BookForm /> */}
  {/* <Book /> */}
  {/* <SubjForm /> */}
  

