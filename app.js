import { data } from './data.js'
import { Tree } from './treeConstructor.js'


const newTree = new Tree(1, 'ریشه');

function createTree(src, id) {
    for (let i in src['items']) {
        if ('Title' in src['items'][i]) {
            newTree.insert(id, +(id + `${+i + 1}`), src['items'][i]['Title'])
        }
        if ('items' in src['items'][i]) {
            const _id = 'Title' in src['items'][i] ? +(id + `${+i + 1}`) : id
            createTree(src['items'][i], _id)
        }
    }

}

createTree(data, 1)

// console.log([...newTree.preOrderTraversal()].map(x => x.key));
console.log(newTree.find(112).value);
console.log(newTree.find(111).isLeaf);