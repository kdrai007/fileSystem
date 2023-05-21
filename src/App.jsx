import {useState} from "react";
import data from "./data/ExplorerData";
import Folder from "./components/Folder";
// import Uuid4 from "./data/uuidGenerator";
// import useInsertFolder from "./hooks/useNewFolder";
import './App.css'
function App() {
  const [explorerData,setExplorerData]=useState(data);
  
  return (
    <main>
         <Folder mainData={explorerData} setExplorerData={setExplorerData} expData={explorerData}  />
    </main>
  )
}
export default  App;