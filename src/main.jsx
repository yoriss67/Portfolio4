// import React, { useState }  from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import {Board, Bio, Avatar, Currently, Projects, Global} from "./index"

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Global />
//     {/* <Board /> */}
//     <Bio />
//     <Projects />
//     {/* <Avatar /> */}
//     <Currently />
//   </React.StrictMode>,
// )

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Header, Board, Bio, Avatar, Currently, Works, Global } from './index';

function Main() {
  const [isJapanese, setLanguage] = useState(false);
  return (
    <React.StrictMode>
      <Global isJapanese={isJapanese} setLanguage={setLanguage} />
      <Header />
      {/* <Board /> */}
      <Bio isJapanese={isJapanese} />
      <Works isJapanese={isJapanese} />
      {/* <Avatar /> */}
      <Currently isJapanese={isJapanese} setLanguage={setLanguage} />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <>
//     <Global />
//     {/* <Board /> */}
//     <Bio />
//     <Projects />
//     {/* <Avatar /> */}
//     {/* <Currently /> */}
//   </>,
// )
