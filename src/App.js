import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Pages/Home/Home';
import Courses from './components/Courses/Courses';
import SignIn from './components/SignIn/SignIn';
import Signup from './components/SignUp/Signup';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';

const router = createBrowserRouter([
  {
  path: '/',
  element: <Main></Main>,
  children: [
    {
        path: '/',
        element: <Home></Home>
    },
    {
      path: '/courses',
      element: <Courses></Courses>
    },
    {
      path: '/about',
      element: <About></About>
    },
    {
      path: '/blog',
      element: <Blog></Blog>
    },
    {
      path: '/contact',
      element: <Contact></Contact>
    },
    {
      path: '/signin',
      element: <SignIn></SignIn>
    },
    {
      path: '/signup',
      element: <Signup></Signup>
    }
  ]
  }
])

function App() {
  return (
    <div className="App">
          <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
