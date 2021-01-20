const maxDepth = (root) => {
    const result = 0;
    const traverse = node => {
        result++;
        if (node.left) { traverse(node.left); }
        if (node.right) { traverse(node.right); }
    }

    if (node) {
        traverse(root);
    }
    
    return result;
};