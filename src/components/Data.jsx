export default function Data() {
     let name = "André"
     let client = {
          name: "André",
          email: "andre@mail.com"
     }
     function pythagoras(a, b) {
          return (
               Math.sqrt(a * a + b * b)
          )
     }
     return (
          <>
               <h3>Nome:{name}</h3>
               <p>Email:{client.email}</p>
               <p className="pythagoras">Pythagoras: {pythagoras(3, 4)}</p>
          </>
     )
}