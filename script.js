
const chuckNorris = async() => {
    try {
        const respuesta = await fetch(`https://api.chucknorris.io/jokes/random`)
       resultado = respuesta.json().then( (value) => $("#norris").text(
           `${value.value}`
    ))        
    }
    catch {
        console.log("se a producido un error")
    }
}

chuckNorris()

















/*


const findPostById = async(id) => {
    try {
        const respuesta =  await fetch('https://jsonplaceholder.typicode.com/posts/' +id)
        const post = respuesta.json();
        console.log(post)

    } catch(error) {
        console.log("aquiiiii" + error)
    }
}

findPostById(50);

*/