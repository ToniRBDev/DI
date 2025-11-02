
// Url de donde queremos obtener los commentarios
const urlComments = "https://jsonplaceholder.typicode.com/comments";

async function cleanComments () {
  const response = await fetch(urlComments); //respuesta con los commentarios
  const comments = await response.json(); //pasamos la respuesta a JSON

  // Filtramos los comentarios que incluyan "qui" en el nombre
  const filteredComments=comments.filter(comment => ((comment.body).toLowerCase().includes("qui")))
                                 .map(comment => ({...comment, email:comment.email.toLowerCase()})); 
                                 // creamos un nuevo Array, que cada objeto, sea una copia del objeto pero modificamos el email
                                 //esto lo realizamos mediante la desestructuracion
  // Aquí filtramos sobre una copia del Array anterior para no modificarlo
  //Para ordenar strings se utiliza el método localeCompare()
  const orderedCommentsByPostIdAsc= [...filteredComments].sort((comment1, comment2)=> comment1.postId - comment2.postId);
  const orderedCommentsByEmailAsc= [...filteredComments].sort((comment1, comment2)=> (comment1.email.localeCompare(comment2.email)));

  console.log(orderedCommentsByPostIdAsc);
  console.log(orderedCommentsByEmailAsc);
}

cleanComments();
