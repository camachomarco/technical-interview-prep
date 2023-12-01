class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    # Add to the end
    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node

    # Remove from start
    def remove_first(self):
        if not self.head:
            return
        self.head = self.head.next

    # Display list
    def print_list(self):
        current = self.head
        while current:
            print(current.data)
            current = current.next


# Usage
my_list = LinkedList()
my_list.append(1)
my_list.append(2)
my_list.append(3)
my_list.remove_first()
my_list.print_list()
