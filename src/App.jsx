import {useState} from "react";
import data from "./data/ExplorerData";
import Folder from "./components/Folder";
import Uuid4 from "./data/uuidGenerator";
import useInsertFolder from "./hooks/useNewFolder";
import './App.css'
function App() {
  const [explorerData,setExplorerData]=useState(data);
  const {insertFolder}=useInsertFolder();
  function addNewFolder(folderId,item,isFolder){
    console.log("reaching at app.js")
    const finalItem=insertFolder(explorerData,folderId,item,isFolder);
    setExplorerData(finalItem);
  }
  return (
    <main>
      {data.map((exp)=>{
        return   <Folder NewFolder={addNewFolder} expData={exp} key={exp.id} />
      })
      }
    </main>
  )
}
export default  App;