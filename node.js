var Node = (function(){
  function Node(element) {
    this.element = element;
    this.next = null
  }

  return Node;
})();

module.exports = Node;
