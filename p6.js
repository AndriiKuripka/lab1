'use strict';

function recursiveAction(root, action, getNodes, depth) {
    action(root, depth);
    let nodes = getNodes(root, depth);

    if(nodes)
        for(let i = 0; i < nodes.length; ++i)
            recursiveAction(nodes[i], action, getNodes, depth + 1);
}

let root = {
    data: 'root',
    refs: [
        {
            data: 'node 1',
            refs: [
                { data: 'node 1.1', refs: [] }
            ]
        },
        {
            data: 'node 2',
            refs: [
                { data: 'node 2.1', refs: [] },
                { data: 'node 2.2', refs: [] }
            ]
        },
        {
            data: 'node 3',
            refs: [
                { data: 'node 3.1', refs: [] },
                { data: 'node 3.2', refs: [] },
                { data: 'node 3.3', refs: [] }
            ]
        }
    ]
};

recursiveAction(
    root,
    (node, depth) => {
        let output = '';
        for(let i = 0; i < depth; ++i)
            output += '  ';
        output += JSON.stringify(node.data);
        console.log(output);
    },
    (node, depth) => {
        if (depth<1) return node.refs
        else return []
    },
    0
);
