"use strict";
class UndirectedWeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ vertex: vertex2, weight });
        this.adjacencyList[vertex2].push({ vertex: vertex1, weight });
    }
    printGraph() {
        for (const vertex in this.adjacencyList) {
            const edgeList = this.adjacencyList[vertex].map((edge) => `${edge.vertex}(${edge.weight})`).join(" ");
            console.log(`${vertex}-->${edgeList}`);
        }
    }
}
// Example usage
const uwg = new UndirectedWeightedGraph();
uwg.addVertex("A");
uwg.addVertex("B");
uwg.addVertex("C");
uwg.addVertex("D");
uwg.addEdge("A", "B", 4);
uwg.addEdge("A", "C", 2);
uwg.addEdge("B", "D", 5);
uwg.addEdge("C", "D", 1);
uwg.printGraph();
