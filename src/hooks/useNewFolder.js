import Uuid4 from "../data/uuidGenerator";
const useTraverseTree = () => {
  const insertFolder = (mainTree, treeId, item, isFolder) => {
    if (mainTree.id === treeId && isFolder) {
      console.log("reaching here");
      mainTree.items.unshift({
        id: Uuid4(),
        name: item,
        isFolder,
        items: []
      });
    }
    return mainTree;
  };

  return { insertFolder };
};

export default useTraverseTree;