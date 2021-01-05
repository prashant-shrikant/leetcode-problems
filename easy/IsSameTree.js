var isSameTree = function(p, q) {
    return isSameNode(p, q);
};

const isSameNode = (t1, t2) => {
    if (t1 === null && t2 === null) return true;
    if (t1 === null || t2 === null) return false;
    return t1.val === t2.val
            && isSameNode(t1.right, t2.right)
            && isSameNode(t1.left. t2.left);
}