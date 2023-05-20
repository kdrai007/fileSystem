import Uuid4 from "./uuidGenerator";
const  explorer=[
  {
    id:Uuid4(),
    isFolder:true,
    name:"root",
    items:[
     { 
    id:Uuid4(),
    isFolder:true,
    name:"insideRoot",
    items:[
      {
        id:Uuid4(),
        isFolder:true,
        name:"kdrai",
        items:[],
      }  
    ]
     },
      {
        id:Uuid4(),
        isFolder:true,
        name:"insideRoot2",
        items:[]
      },{
        id:Uuid4(),
        isFolder:false,
        name:"package.json",
        items:[]
      }
    ]
  }
];
export default explorer;