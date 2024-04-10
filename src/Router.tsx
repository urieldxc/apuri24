import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { AnimeDetails } from './components/AnimeDetails';
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "about",
      element: <div>About</div>,
    },
    {
      path: "anime/:animeId",
      element: <AnimeDetails />
    },
  ]);

