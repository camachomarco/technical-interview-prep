"use strict";
class DirectedWeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = [];
    }
    addEdge(startVertex, endVertex, weight) {
        this.adjacencyList[startVertex].push({ vertex: endVertex, weight });
    }
    printGraph() {
        for (const vertex in this.adjacencyList) {
            const edgeList = this.adjacencyList[vertex].map((edge) => `${edge.vertex}(${edge.weight})`).join(" ");
            console.log(`${vertex}-->${edgeList}`);
        }
    }
}
// Example usage
const dwg = new DirectedWeightedGraph();
dwg.addVertex("A");
dwg.addVertex("B");
dwg.addVertex("C");
dwg.addVertex("D");
dwg.addEdge("A", "B", 4);
dwg.addEdge("A", "C", 2);
dwg.addEdge("B", "D", 5);
dwg.addEdge("C", "D", 1);
dwg.printGraph();
