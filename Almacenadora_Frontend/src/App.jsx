
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default App
import { useRoutes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import routes from "./routes.jsx";

export const App = () => {
  let element = useRoutes(routes);

  return (
    <>
      {element}
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

