import About from './About';
import Home from './Home';
import Profile from './Profile';
import { Routes, Route, Link } from 'react-router-dom';
import Profiles from './Profiles';
import Layout from './Layout';
import NotFound from './NotFound';
import Login from './Login';
import MyPage from './MyPage';
import CommentList from './comment/CommentList';
import SignUp from './Signup';
import Main from './main';

import './App.css';

import Todo from './todo';
import TodoTemplate from './components/TodoTemplate';



function App() {
  return (
    <>    
      <Routes>

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/info" element={<About />} />
          <Route path="/todo" element={<Todo />} />
          
                    
          <Route path="/profiles" element={<Profiles />}>
            <Route path=":userid" element={<Profile />} />
          </Route>  

          <Route path="/comment/Comment" element={<CommentList />} />
        </Route>
        
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/SignUp" element={<SignUp />}/>
      </Routes>
    </>
  );
}

export default App;
