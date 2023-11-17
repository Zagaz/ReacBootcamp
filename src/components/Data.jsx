export default function Data() {
     let name = "André"
     let client = {
          name: "André",
          email: "andre@mail.com"
     }
     function pythagoras(a,b){
          return (
               Math.sqrt(a*a + b*b)
          )
     }
     return (
          <>
               <p>Nome:{name}</p>
               <p>Email:{client.email}</p>
               <p>Pythagoras: {pythagoras(3,4)}</p>
          </>
     )
}