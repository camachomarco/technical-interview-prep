"use strict";
class DirectedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = [];
    }
    addEdge(startVertex, endVertex) {
        this.adjacencyList[startVertex].push(endVertex);
    }
    printGraph() {
        for (const vertex in this.adjacencyList) {
            console.log(`${vertex}-->${this.adjacencyList[vertex].join(" ")}`);
        }
    }
}
// Example usage
const dg = new DirectedGraph();
dg.addVertex("A");
dg.addVertex("B");
dg.addVertex("C");
dg.addVertex("D");
dg.addEdge("A", "B");
dg.addEdge("A", "C");
dg.addEdge("B", "D");
dg.addEdge("C", "D");
dg.printGraph();
