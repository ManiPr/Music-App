import './App.css';
import LandingPage from './pages/landing-page/LandingPage'
import Nav from './components/nav/Nav'
import routes from './routes'
import { useRoutes } from 'react-router-dom'
export default function App() {
  let router=useRoutes(routes)
  return (
    <>
      <Nav></Nav>
      {router}
    </>
  );
}

