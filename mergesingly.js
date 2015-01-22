var SinglyLinkedList = require('./singly');

var sll = new SinglyLinkedList();
sll.insert(6, "head");
sll.insert(5, 6);
sll.insert(3, 5);
sll.insert(1, 3);
sll.insert(8, 1);
sll.insert(7, 8);
sll.insert(2, 7);
sll.insert(4, 2);

function mergeSortLinkedList(sll) {
}

function mergeLinkedLists(left, right) {
}

var answer = mergeSortLinkedList(sll);
answer.display();
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8

