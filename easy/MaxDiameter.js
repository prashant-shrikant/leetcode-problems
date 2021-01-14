const diameterOfBinaryTree = root => {
    let diameter = 0;
    const recurse = node => {
        if (node === null) return 0;
    
        const left = rec(node.left);
        const right = rec(node.right);
    
        diameter = Math.max(diameter, left + right);
    
        return Math.max(left, right) + 1;
    }

    recurse(root);
    return diameter;
}

