async function getUppercaseTitlesByUser(userId = 1) {
    const respuesta= await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await respuesta.json();
    const postUsuario1 = posts.filter(post => post.userId===userId);
    /*const postU1TitMayusculas= postUsuario1.map(post => {
                    const {userId, id, title, body} = post;

                return {userId,
                         id,
                         tittle: title.toUpperCase(),
                          body};*/
    const postU1TitMayusculas = postUsuario1.map((post) => ({...post, title : post.title.toUpperCase()})) ;
    console.log(postU1TitMayusculas);
}





    

  // 1) fetch posts
  // 2) json
  // 3) filter por userId
  // 4) map a títulos en mayúsculas


getUppercaseTitlesByUser();