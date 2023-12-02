import { writeFile } from "fs";
import { exec } from "child_process";

class Graph {
  private adjacencyList: { [key: string]: Set<string> } = {};

  addVertex(vertex: string): void {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = new Set();
  }

  addEdge(vertex1: string, vertex2: string): null | void {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return null;
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  removeEdge(vertex1: string, vertex2: string) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }

  removeVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) return;
    for (let adjVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjVertex);
    }
    delete this.adjacencyList[vertex];
  }

  generateDotFile(): void {
    let dotContent = "graph {\n";
    const addedEdges = new Set<string>();

    for (const vertex in this.adjacencyList) {
      const neighbors = this.adjacencyList[vertex];
      neighbors.forEach((neighbor) => {
        const edgeString = [vertex, neighbor].sort().join("--");
        if (!addedEdges.has(edgeString)) {
          dotContent += `  ${vertex} -- ${neighbor};\n`;
          addedEdges.add(edgeString);
        }
      });
    }

    dotContent += "}\n";

    writeFile("graph.dot", dotContent, (err) => {
      if (err) {
        console.error("Error writing the .dot file:", err);
      } else {
        console.log("Successfully generated the .dot file.");

        // Run dot command to generate PNG
        exec("dot -Tpng graph.dot -o graph.png", (error, stdout, stderr) => {
          if (error) {
            console.error(`Error generating PNG: ${error}`);
            return;
          }
          console.log(`stdout: ${stdout}`);
          console.log(`stderr: ${stderr}`);
        });
      }
    });
  }
}

// Example usage
const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "D");
g.addEdge("D", "A");
g.addEdge("D", "E");
g.addEdge("A", "E");

g.generateDotFile();
