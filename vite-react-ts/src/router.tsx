
import React from 'react'
import { useRoutes } from 'react-router-dom'

// import Home from '@/pages/Home'
// import Styled from '@/pages/Styled'
// import About from '@/pages/About'


const Home = React.lazy(() => import('@/pages/Home'));
const WindPage = React.lazy(() => import('@/pages/Wind'));
const About = React.lazy(() => import('@/pages/About'));

import NotFound from '@/pages/NotFound';
import LoadingScreen from '@/components/layout/LoadingScreen';



export default function RouteConfig() {
  return useRoutes([
    {
      path: "/",
      element:
        <React.Suspense fallback={<LoadingScreen/>}>
          <Home />
        </React.Suspense>
    },
    {
      path: "/wind",
      element:
        <React.Suspense fallback={<LoadingScreen/>}>
          <WindPage />
        </React.Suspense>
    },
    {
      path: "/about",
      element:
        <React.Suspense fallback={<LoadingScreen/>}>
          <About />
        </React.Suspense>
    },
    {
      path: "*",
      element: <NotFound />,
    }
  ]);
}
