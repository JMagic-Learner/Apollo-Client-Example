import React from 'react'

//IMAGES//

import Diagram1 from '../../Assets/GraphQLDiagram1.jpg'
import Diagram2 from '../../Assets/GraphQLDiagram2.jpg'
import Diagram3 from '../../Assets/GraphQLDiagram3.jpg'
import Diagram4 from '../../Assets/GraphQLDiagram4.jpg'
import Diagram5 from '../../Assets/GraphQLDiagram5.jpg'
import Diagram6 from '../../Assets/GraphQLDiagram6.jpg'
import Diagram7 from '../../Assets/GraphQLDiagram7.jpg'
import Diagram8 from '../../Assets/GraphQLDiagram8.jpg'
import Diagram9 from '../../Assets/GraphQLDiagram9.jpg'

function Explanation() {
    return(
        <section className="explanation-container">
            <h2> EXPLAINING GRAPHQL </h2>
           
            <section className="depedency-content">
            <h3 className="text-white"> WHAT IS GRAPHQL </h3>
          
                <img src={Diagram1}/>
                <div className="dependency-HTMLoutput border rounded text-justify" >
                <p> Graph QL is a query language designed by Facebook. It's primary purpose is to provide the end-client a structured query language to request and retrieve data</p>
                </div>
            </section>
          
            <section className="dependency-content">
            <h3 className="text-white"> GRAPHQL vs EXPRESS </h3>
            <img src={Diagram2}/>
                <div className="dependency-HTMLoutput border rounded text-justify" >
                
             
                </div>
            </section>
            
            <section className="dependency-content">
            <h3 className="text-white"> APOLLO/SERVER and APOLLO/CLIENT </h3>
            <img src={Diagram3}/>
                
                <div className="dependency-HTMLoutput border rounded text-justify" >
                <p> These two utilities help facilitate the creation of a GraphQL server, and also helps guide the client on how to make GraphQL requests.</p>
                </div>
                <img src={Diagram4}/>
                <div className="dependency-HTMLoutput border rounded text-justify" >
                <p> Apollo-Server for example, creates an ApolloServer (which is really just a GraphQL Server), imports a GraphQL query platform (think PostMan, but for graphQL requests), and TYPEDEFS (define what the data is, and what is returned)</p>
                <p> Apollo-Client connects the front end application to the GraphQL Server. It also imports syntax like useMutation, useQuery (CUSTOM HOOKS) to help execute GraphQL methods</p>
                </div>
            </section>

            <section className="dependency-content">
            <h3 className="text-white"> GraphQL - MUTATIONS/QUERIES</h3>
                <img src={Diagram5} />
                <div className="dependency-HTMLoutput border rounded text-justify" >
                <p> Queries and Mutations are fundamental building blocks of the graphQL language. There is clear stratification in purpose. You either receive data (QUERIES) or modify data (MUTATIONS).</p>
                </div>
            </section>
                
            <section className="dependency-content">
            <h3 className="text-white"> GraphQL - Resolvers </h3>
            <img src={Diagram6} />
            
                <div className="dependency-HTMLoutput border rounded text-justify" >
                    <p> Resolvers define the logic performed on the API dataset once a query identifier is detected</p>
                    <p> For example, the image on the right is the resolver defined in the server architecture. It is looking for a query identifier named todos.
                     The image on the left is the resolver defined in the client architecture. When QUERY_TODOS is called, it will send a query named todos to the GraphQl server</p>
                    <p> The most important thing to note is what is returned. in the right hand side of the image, we know that we are combing through a dataset and sorting the resutls by id ascending
                     But the image on the left actually determines WHAT data is being given back to the client</p>
                </div>

                <div className="dependency-HTMLoutput border rounded text-justify" >
                    <p> This means that instead of recieving the all key value pairs, we can instead LIMIT what fields are returned </p>
                </div>
            </section>

            <section className="dependency-content">
            <h3 className="text-white"> GraphQL - TypeDefs, like typescript interface but for API requests </h3>
            <img src={Diagram7} />
            
                <div className="dependency-HTMLoutput border rounded text-justify" >
                    <p> Typedefs restrict the data type of items returned via request. In the image above, we define Int, String etc as the expected data types.
                        Our queries can also define which if the data returned is plural / multiple , [Todos], or singular, Todos. Mutations on the other hand define what variables are expected, and what items are returned
                    </p>
                </div>

                <div className="dependency-HTMLoutput border rounded text-justify" >
                    <p> This means that instead of recieving the all key value pairs, we can instead LIMIT what fields are returned </p>
                </div>
            </section>

            <section className="dependency-content">
            <h3 className="text-white"> GraphQL - Comparing client requests against Express </h3>
            <img src={Diagram8} />
            <img src={Diagram9} />
                

                <div className="dependency-HTMLoutput border rounded text-justify" >
                   <p> GraphQL requires either useMutation, useQuery</p>
                   <p> We can destructure the return package into loading, error, data</p>
                   <p> If we wish, we can also specify to automatically refetch data once we perform the query / mutation</p>
                   <p> We can either define variables in the hook, or we can define the variables once we call the specific query function(addtodos)</p>
                </div>
            </section>

            
        </section>
       
    )
}

export default Explanation