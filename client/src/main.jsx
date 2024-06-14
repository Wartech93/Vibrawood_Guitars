import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'
import './tailwind.css'
import App from './App.jsx'
import Home from './pages/Home';
import Detail from './pages/Detail';
import Signup from './pages/Signup';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';
import Shop from './pages/Shop';
import About from './pages/About.jsx';
import Media from './pages/Media.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <NoMatch />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/success',
        element: <Success />
      }, {
        path: '/orderHistory',
        element: <OrderHistory />
      }, {
        path: '/products/:id',
        element: <Detail />
      }, {
        path: '/shop',
        element: <Shop />
      }, {
        path: '/about',
        element: <About />
      },
      {
        path: '/media',
        element: <Media />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
