import Link from "next/link";

export default function Projects() {
    return (
      <div className="min-h-screen bg-black p-8"> {/* bg-black eklendi */}
        <h1 className="text-4xl font-bold text-center mb-8 text-white"> {/* text-white eklendi */}
          My Projects
        </h1>
  
        {/* Project 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-black"> {/* text-black eklendi */}
            Inventory-Stock-Manager
          </h2>
          <p className="text-lg text-gray-700">
            It is a program that follows and manages the situation in the warehouses
            of the enterprises by considering the amount of their products.
          </p>
        </div>
  
        {/* Project 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2 text-black"> {/* text-black eklendi */}
            Greedy-TSP
          </h2>
          <p className="text-lg text-gray-700">
            A simple Greedy solution to solve the Traveling Salesperson Problem.
          </p>
        </div>
  
        <div className="text-center mt-8">
          <Link legacyBehavior href={"/"}>
            <a className="text-blue-500 text-lg font-medium underline">
              Go back to Home
            </a>
          </Link>
        </div>
      </div>
    );
  }