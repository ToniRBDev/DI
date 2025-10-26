

/*async function usersWithPostsCount() {
  const usersURL = 'https://jsonplaceholder.typicode.com/users';
  const postsURL ='https://jsonplaceholder.typicode.com/posts';
  const [users, posts] =await Promise.all([(await fetch(usersURL)).json(), fetch(postsURL).then(post => post.json())]);

  const numeroPostsPorUsuario = posts.reduce((acumulador, post) => {
        acumulador[post.userId] = (acumulador[post.userId] || 0) + 1;
        return acumulador;
  }, {});

  console.log(numeroPostsPorUsuario);


  

  console.log(users);

}

usersWithPostsCount();*/

async function usersWithPostCount(){

  const urlUsers='https://jsonplaceholder.typicode.com/users/'; 
  const urlPosts = 'https://jsonplaceholder.typicode.com/posts/';
  
  // Promise.all nos devuelve un array de 2 posicioes
  // [0]=array de objetos users ||  [1]= array de objetos posts
  // desestructuramos el array para que queden 2 arrays distintos, todavía sin formatear a JSON
  const [usersResponse, postsResponse] = await Promise.all(  
    [fetch(urlUsers), fetch(urlPosts)]);       

  // pasamos los datos a JSON, de nuevo con Promise.all para optimizar los tiempos
  // desestructuramos el array de nuevo y ya tenermos 2 arrays en formato json
  const [users, posts] = await Promise.all(
    [usersResponse.json(), postsResponse.json()]);  
}



