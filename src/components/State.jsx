import React, { useEffect } from "react";
import { useState } from "react";
import Button from "./Button";

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
                    //Title and body for posts
                  if (resourceType === "posts"){
                           return (
                               <>
                                   <h1 className="title">{item.title}</h1>
                                   <div>{item.body}</div>
                                   <br />
                               </>
                           )
                  }
                  if (resourceType === "users"){
                           return (
                               <>
                                   <h1 className="title">{item.name}</h1>
                                   <div>{item.email}</div>
                                   <br />
                               </>
                           )
                  }

                    if (resourceType === "comments"){
                              return (
                                    <>
                                     <h1 className="title">{item.name}</h1>
                                     <div>{item.email}</div>
                                     <br />
                                    </>
                              )
                    }    
                  
                  
                   
                    
               }
               )}
          </>
     )

}
export default State;