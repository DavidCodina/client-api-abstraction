//Could also wrap these functions in an object...


function getTodos(){
  return new Promise((resolve, reject) => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5', {
      timeout: 1000 * 10 //Change to 5 to generate an errror.
    })
    .then(res  => { resolve(res); })
    .catch(err => { reject(err); });
  });
}




function postTodo(){
  return new Promise((resolve, reject) => {
    axios.post(
      'https://jsonplaceholder.typicode.com/todos',
      { title: 'New Todo', completed: false },
      { timeout: 1000 * 10 }
    )
    .then(res  => { resolve(res); })
    .catch(err => { reject(err);  });
  });
}




function updateTodo(){
  return new Promise((resolve, reject) => {
    axios.patch(
      'https://jsonplaceholder.typicode.com/todos/1',
      { title: 'Updated Todo', completed: true },
      { timeout: 1000 * 10 }
    )
    .then(res  => { resolve(res); })
    .catch(err => { reject(err);  });
  });
}




function deleteTodo(){
  return new Promise((resolve, reject) => {
    axios.delete('https://jsonplaceholder.typicode.com/todos/1', { timeout: 1000 * 10 })
    .then(res  => { resolve(res); })
    .catch(err => { reject(err);  });
  });
}
