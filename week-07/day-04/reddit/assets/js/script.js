'use strict'


window.onload = () => {
  const host = 'http://localhost:8080';
  const myRequest = new XMLHttpRequest();
  const postParent = document.querySelector('#postContainer');

  myRequest.open('GET', `${host}/posts`, true);

  myRequest.onload = () => {
    if (myRequest.status === 200) {
      const postList = JSON.parse(myRequest.response).posts
      console.log(postList);
      postList.forEach(post => {
        let newRow = document.createElement('tr');
        postParent.appendChild(newRow);
        let newId = document.createElement('td');
        newRow.appendChild(newId);
        newId.innerText = post.id;
        let newUser = document.createElement('td');
        newRow.appendChild(newUser);
        newUser.innerText = post.title;
        let newUrl = document.createElement('td');
        newRow.appendChild(newUrl);
        newUrl.innerText = post.url;
        let newTimestamp = document.createElement('td');
        newRow.appendChild(newTimestamp);
        newTimestamp.innerText = post.timestamp
        let newScore = document.createElement('td');
        newRow.appendChild(newScore);
        newScore.innerText = post.score;
      })
    }
  }
  myRequest.send();
}