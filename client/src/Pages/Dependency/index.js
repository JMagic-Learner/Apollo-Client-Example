import React from 'react'

function Dependency() {

    let dependenciesRoot = [
        {
            name: "concurrently",
            version: "7.3.0",
            description: "A NPM Package that allows the user to run multiple CLI / Scripts at the same time"
        },

    ]

    let dependenciesClient = [
        {
            name: "@testing-library/jest-dom",
            version: "5.16.5",
            description: "This particular package concerns spying on events."
        },
        {
            name: "@testing-library/react",
            version: "13.3.0",
            description: " This particular package concerns testing methods regarding REACT components."
        },
        {
            name: "@testing-library/user-event",
            version: "13.5.0",
            description: "A node package bundled with npx create-react-app."
        },
        {
            name: "react",
            version: "18.2.0",
            description: "A front-end framework that enables dynamic, flexible and lightweight implementation of single page applications"
        },
        {
            name: "react-dom",
            version: "18.2.0",
            description: "A front-end framework that enables dynamic, flexible and lightweight implementation of single page applications"
        },
        {
            name: "react-router-dom",
            version: "6.3.0",
            description: "A utility that allows a REACT applicaation to detect changes in endpoint url, and rerender according to specified routes"
        },
        {
            name: "react-scripts",
            version: "5.0.1",
            description: "NPM package that designates default scripts such as  `start`: `react-scripts start`."
        },
        {
            name: "web-vitals" ,
            version: "^2.1.4",
            description: "Utility to monitor the web application"
        },
        {
            name: "graphql",
            version: "^16.5.0",
            description: "GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data."
        }, 
        {
            name: "@apollo/client",
            version: "^3.6.9",
            description: "GraphQL Client. State management library for Javascript. Fetch, modify, cache both local and remote data"
        }, 
    ]

    let dependenciesServer = [
        {
            name: "graphql",
            version: "^16.5.0",
            description: "GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data."
        },
        {
            name: "dotenv",
            version: "16.0.1",
            description: "A node package that enables the automatic load of environment variables (aka .env files)"
        },
        {
            name: "cors",
            version: "2.8.5",
            description: "A node package allows you to designate authorized/approved origin urls"
        },
        {
            name: "mongoose",
            version: "^6.5.2",
            description: "This node package will allow you to seed, create db schemas, and connect to both local and cloud databases"
        },
        {
            name: "apollo-server",
            version: "^3.10.1",
            description: "Apollo Server is an open-source, GraphQL server that's compatible with any GraphQL client, including Apollo Client."
        },
       
    ]

return(
<section>
          
          <h2> DEPENDENCIES </h2>
          <section className="dependency-content">
             
          <h2 className="text-white"> Root </h2>
              {dependenciesRoot.map((item)=>{
                  return(
                      
                      <div className="dependency-HTMLoutput border rounded">
                         
                              <th className="column-name"> Name: {item.name}   </th>
                         
                              <th className="column-description"> {item.description} </th>
                          
                      </div>
                      
                  )
              })}
               <h2 className="text-white"> Client </h2>
              {dependenciesClient.map((item)=>{
                  return(
                   <tr className="dependency-HTMLoutput border rounded">
                     
                              <th className="column-name"> Name: {item.name}   </th>
                             
                              <th className="column-description"> {item.description} </th>
                         
                  </tr>
              )})}
              <h2 className="text-white"> Server </h2>
               {dependenciesServer.map((item)=>{
                  return(
                  <div className="dependency-HTMLoutput border rounded">
                     
                              <th className="column-name"> Name: {item.name}   </th>
                              
                              <th className="column-description"> {item.description} </th>
                  </div>
              )})}
       
      </section>
  </section>
)
}

export default Dependency