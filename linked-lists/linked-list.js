class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Solution {
    constructor() {
        this.head = null;
    }

    // O(n) - Inserir no fim de um linked list sempre sera O(n) diferente de um array comum
    insertAtEnd(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }

        current.next = newNode;
    }

    // O(1) - Inserir no comeco de um linked list sempre sera O(1) diferente de um array comum
    insertAtStart(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Buscar por um elemento O(n)
    search(target) {
        let current = this.head;
        let index = 0;
        while (current !== null) {
            if (current.data === target) {
                console.log(`Elemento ${target} encontrado no index ${index}`);
                return true;
            }
            current = current.next;
            index++;
        }
        console.log(`Elemento ${target} nao encontrado.`)
        return false
    }

    // Deletar do comeco O(1)
    deleteFromStart() {
        if (this.head !== null) {
            this.head = this.head.next;
        }
    }

    // Deletar do fim O(n)
    deleteFromEnd() {
        if (this.head === null) return;
        if (this.head.next === null) {
            this.head = null;
            return
        }
        let current = this.head;
        while (current.next.next !== null) {
            current = current.next
        }
        current.next = null;
    }

    // Print da lista encadeada/linked list O(n)
    printList() {
        let current = this.head;
        let output = '';
        while (current !== null) {
            output += `${current.data} -> `;
            current = current.next;
        }
        console.log(output + 'null');
    }
}

const list = new Solution();

list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);
console.log("List after inserting elements at the end:");
list.printList();

list.insertAtStart(5);
console.log("List after inserting element at the start:");
list.printList();

list.search(20);

list.deleteFromStart();
console.log("List after deleting element from the start:");
list.printList();

list.deleteFromEnd();
console.log("List after deleting element from the end:");
list.printList();
