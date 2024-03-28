import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import BookDetails from './components/BookDetails/BookDetails';
import ListedBooks from './components/ListedBooks/ListedBooks';
import AddedReadList from './components/ShowAddedList/AddedReadList';
import AddedWishList from './components/ShowAddedList/AddedWishList';
import PagesToRead from './components/PagesToRead/PagesToRead';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/listed',
        element: <ListedBooks></ListedBooks>,
        
        children:[
          {
            index: true,
            element: <AddedReadList></AddedReadList>,
            loader: () => fetch('/books.json')
          },
          {
            path: 'wishlist',
            element: <AddedWishList></AddedWishList>,
            loader: () => fetch('/books.json')

          }
        ]
      },
      {
        path: '/Book/:BookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/books.json')
      },
      {
        path: '/pages',
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch('/books.json')
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/Contact',
        element: <Contact></Contact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
