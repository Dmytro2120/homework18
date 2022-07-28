import logo from './logo.svg';
import './App.css';
import Post from './component/post.js';
import AnakinImg from '../src/photo/Anakin.jpg';


function App() {
  const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
  const posts = [
    {
      id: '001',
      PostAuthor:
        {
          name: "Anakin Skywalker",
          photo: AnakinImg,
          nickname: "@dart_vader"
        },
      content: "WTF? Who is Ray? Why she is Skywalker? Luke...?", 
      image: RAY_IMAGE,
      date: "11 лют."
    },
    
  ];

  return (
    <div className='App'>
      {posts.map((post) => <Post data = {post} key={post.id}/>)}
    </div>
  )
}

export default App;
