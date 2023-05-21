import Uuid4 from "../data/uuidGenerator";
const useTraverseTree = () => {
  const insertFolder = (mainTree, treeId, item, isFolder) => {
    const id=Uuid4();
//function to loop through all the items  in mainTree;
  function loopItems(Item) {
   if (treeId === Item.id && isFolder) {
      Item.items.unshift({
        id,
        name: item,
        isFolder,
        items: []
      });
      console.log("created new folder with id ",id);
    }else if(Item.id===treeId){
      Item.items.unshift({
        id,
        name:item,
        isFolder,
        items:[]
      })
      console.log("created new file with id ",id);
    }
  if (Item.items.length > 0) {
    Item.items.map(loopItems);
  }
    };
  loopItems(mainTree);
    console.log(mainTree);
  return mainTree;
  }

  return { insertFolder };
};


export default useTraverseTree;