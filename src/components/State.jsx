import React, { useEffect } from "react";
import { useState } from "react";
import "./State.scss";


function State() {

     const [resourceType, setResourceType] = useState("posts");
     const [items, setItems] = useState([]);
     useEffect(() => {
          console.log("resource changed");
          fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
               .then(response => response.json())
               .then(json => setItems(json))
     }
          , [resourceType])



     return (
          <>
               <br />
               <h1>UseState Hook</h1>
               <h2>Count: {resourceType}</h2>
               <div className="flex__hor">
                    <button className="btn btn-secondary"
                         onClick={() => setResourceType("posts")}
                    >Posts</button>
                    <button className="btn btn-secondary"
                         onClick={() => setResourceType("users")}
                    >Users</button>
                    <button className="btn btn-secondary"
                         onClick={() => setResourceType("comments")}
                    >Comments</button>
               </div>
               <hr />
               {items.map(item => {
                   
                   // use a switch statement to render the correct data

                    switch (resourceType) {
                         case "posts":
                              return (
                                   <div key={item.id}>
                                        <h3>{item.title}</h3>
                                        <p>{item.body}</p>
                                   </div>
                              )
                         case "users":
                              return (
                                   <div key={item.id}>
                                        <h3>{item.name}</h3>
                                        <p>{item.email}</p>
                                   </div>
                              )
                         case "comments":
                              return (
                                   <div key={item.id}>
                                        <h3>{item.name}</h3>
                                        <p>{item.body}</p>
                                   </div>
                              )
                         default:
                              return "posts";
                    }
             
               }
               )}
          </>
     )

}
export default State;