import {useState} from "react";
import useInsertFolder from "../hooks/useNewFolder";

const Folder=({mainData,setExplorerData,expData})=>{
  const [expand,setExpand]=useState(false);
  const {insertFolder}=useInsertFolder();
  function NewFolder(folderId,item,isFolder){
    const finalItem=insertFolder(mainData,folderId,item,isFolder);
    console.log(folderId,item,isFolder);
    setExplorerData(mainData);
  }
  const [showInput, setShowInput]=useState({visible:false,isFolder:null});
  const handleClick=(e,folder)=>{
    setExpand(true);
    setShowInput({
      visible:true,
      isFolder:folder
    })
  }
  const addNewFolder=(e)=>{
    if(e.keyCode===13 && e.target.value){
      NewFolder(expData.id,e.target.value,showInput.isFolder);
      setShowInput({...showInput,visible:false});
    };
  }
 if(expData.isFolder) {
  return ( 
    <div>
        <div className="folder">
         <p className="folder_name" role="button" onClick={()=>setExpand(!expand)}>     
           {expand?"📂":"📁"} {expData.name}</p>
          <div>
            <button onClick={(e)=>handleClick(e,true)}>folder +</button>
            <button onClick={(e)=>handleClick(e,false)}>file +</button>
          </div>
       </div>
      <div className="insideFolder" 
        style={{display:expand?"block":"none",paddingLeft:25,marginBottom:10}}>
        {showInput.visible && 
          <div className="input">
            {showInput.isFolder===true?"📁":"📄"} 
            <input onKeyDown={addNewFolder} autoFocus onBlur={()=>setShowInput({...showInput,visible:false})} />
          </div>
        }
        {
          expData.items.map((exp)=>{
            return  <Folder mainData={mainData} setExplorerData={setExplorerData} expData={exp} key={exp.id} />
          })
        }
      </div>
    </div>
      )
 }else{
   return <div className="file">📄 {expData.name}</div>
 }
}
export default Folder;