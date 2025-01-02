class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    // Inserir um valor
    insert(value) {
        const insertRec = (node, value) => {
            if (node === null) {
                return new TreeNode(value);
            }

            if (value < node.val) {
                node.left = insertRec(node.left, value);
            } else if (value > node.val) {
                node.right = insertRec(node.right, value);
            }

            return node;
        };

        this.root = insertRec(this.root, value);
    }

    // Buscar um valor
    search(value) {
        const searchRec = (node, value) => {
            if (node === null) return false;
            if (node.val === value) return true;

            if (value < node.val) {
                return searchRec(node.left, value);
            } else {
                return searchRec(node.right, value);
            }
        };

        return searchRec(this.root, value);
    }

    // Encontrar o menor valor na subárvore
    findMin(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node.val;
    }

    // Deletar um valor
    delete(value) {
        const deleteRec = (node, value) => {
            if (node === null) return null;

            if (value < node.val) {
                node.left = deleteRec(node.left, value);
            } else if (value > node.val) {
                node.right = deleteRec(node.right, value);
            } else {
                // Nó com um filho ou sem filho
                if (node.left === null) return node.right;
                if (node.right === null) return node.left;

                // Nó com dois filhos
                node.val = this.findMin(node.right);
                node.right = deleteRec(node.right, node.val);
            }
            return node;
        };

        this.root = deleteRec(this.root, value);
    }

    // Percorrer a árvore em ordem (útil para debug)
    inorder() {
        const result = [];

        const inorderRec = (node) => {
            if (node !== null) {
                inorderRec(node.left);
                result.push(node.val);
                inorderRec(node.right);
            }
        };

        inorderRec(this.root);
        return result;
    }
}

const bst = new BST();

bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(1);
bst.insert(4);

console.log('Árvore em ordem:', bst.inorder());

console.log('Existe 4?', bst.search(4));  // true
console.log('Existe 6?', bst.search(6));  // false

bst.delete(3);
console.log('Após deletar 3:', bst.inorder());  // [1, 4, 5, 7]