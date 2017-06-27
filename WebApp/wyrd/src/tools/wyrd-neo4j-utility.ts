import * as neo4j from "neo4j-typescript";

export class Neo4jUtility {
    public static query(config: neo4j.INeo4jConfig, request: neo4j.INeo4jCypherRequest): neo4j.INeo4jCypherResponse {
        let cypherResponse: neo4j.INeo4jCypherResponse = null;
        neo4j.connect(config).then((response) => {
            console.log("Successfully connected");

            let myNode: any = {
                firstName: "John",
                lastName: "Doe"
            };

            neo4j.cypher(request).then(
                (value: neo4j.INeo4jCypherResponse) => { cypherResponse = value; }
                );
        })
        return cypherResponse;
    }
}
