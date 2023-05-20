import {useState} from "react";
const Folder=(props)=>{
  const [expand,setExpand]=useState(false);
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
      console.log(props.expData.id,e.target.value,showInput.isFolder);
      props.NewFolder(props.expData.id,e.target.value,showInput.isFolder);
      setShowInput({...showInput,visible:false});
    };
  }
 if(props.expData.isFolder) {
  return ( 
    <div>
        <div className="folder">
         <p className="folder_name" role="button" onClick={()=>setExpand(!expand)}>     
           {expand?"📂":"📁"} {props.expData.name}</p>
          <div>
            <button onClick={(e)=>handleClick(e,true)}>folder +</button>
            <button onClick={(e)=>handleClick(e,false)}>file +</button>
          </div>
       </div>
      <div className="insideFolder" 
        style={{display:expand?"block":"none",paddingLeft:25}}>
        {showInput.visible && 
          <div className="input">
            {showInput.isFolder===true?"📁":"📄"} 
            <input onKeyDown={addNewFolder} autoFocus onBlur={()=>setShowInput({...showInput,visible:false})} />
          </div>
        }
        {
          props.expData.items.map((exp)=>{
            return  <Folder expData={exp} key={exp.id} />
          })
        }
      </div>
    </div>
      )
 }else{
   return <div className="file">📄 {props.expData.name}</div>
 }
}
export default Folder;