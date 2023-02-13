
import '../styles/App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Main from '../pages/Main';
import Quiz from '../pages/Quiz';
import Result from '../pages/Result';
import { UserAuth } from '../resultCounter/resultCounter';


const router=createBrowserRouter([
  {
    path:'/',
    element:<Main/>
  },
  {
    path:'/quiz',
    element:<UserAuth><Quiz/></UserAuth>
  },
  {
    path:'/result',
    element:<UserAuth><Result/></UserAuth>
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
