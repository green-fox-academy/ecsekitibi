'use strict'


window.onload = () => {
  const host = 'http://localhost:8080';
  const myRequest = new XMLHttpRequest();
  const postParent = document.querySelector('#post-container');
  const upvoteRequest = new XMLHttpRequest();
  const downvoteRequest = new XMLHttpRequest();
  const deleteRequest = new XMLHttpRequest();


  //upvote function
  const upvoter = (inputId) => {
    upvoteRequest.open('PUT', `${host}/posts/${inputId}/upvote`, true);
    upvoteRequest.onload = () => {
      if (upvoteRequest.status === 200) {
        const source = JSON.parse(upvoteRequest.response);
        console.log(source);
      }
    }
    upvoteRequest.send()
  }

  //downvote function
  const downvoter = (inputId) => {
    downvoteRequest.open('PUT', `${host}/posts/${inputId}/downvote`, true);
    downvoteRequest.onload = () => {
      if (downvoteRequest === 200) {
        const source = JSON.parse(downvoteRequest.response)
        console.log(source);
      }
    }
    downvoteRequest.send();
  }

  //delete function
  const deleter = (inputId) => {
    deleteRequest.open('DELETE', `${host}/posts/${inputId}`, true);
    deleteRequest.onload = () => {
      if (deleteRequest === 200) {
        const source = JSON.parse(deleteRequest.response)
      }
    }
    deleteRequest.send();
  }

  myRequest.open('GET', `${host}/posts`, true);

  myRequest.onload = () => {
    if (myRequest.status === 200) {
      const postList = JSON.parse(myRequest.response).posts
      console.log(postList);
      postList.forEach(post => {
        let postItem = document.createElement('div');
        postParent.appendChild(postItem);
        postItem.id = post.id;
        postItem.classList.add('postitem')

        let scoreDiv = document.createElement('div');
        postItem.appendChild(scoreDiv);
        scoreDiv.classList.add('scorediv');

        let postContent = document.createElement('div');
        postItem.appendChild(postContent);
        postContent.classList.add('postcontent');

        let titleDiv = document.createElement('div');
        postContent.appendChild(titleDiv);
        titleDiv.classList.add('titlediv');
        titleDiv.innerText = post.title;

        let interAction = document.createElement('div');
        postContent.appendChild(interAction);
        interAction.classList.add('interaction');

        let date = document.createElement('div');
        interAction.appendChild(date);
        date.classList.add('date');
        date.innerText = post.timestamp;

        let deleteButton = document.createElement('button');
        interAction.appendChild(deleteButton);
        deleteButton.classList.add('deletebutton');
        deleteButton.innerText = 'Delete';

        let modifyButton = document.createElement('button');
        interAction.appendChild(modifyButton);
        modifyButton.classList.add('modifybutton');
        modifyButton.innerText = 'Modify';

        let upvote = document.createElement('img');
        scoreDiv.appendChild(upvote);
        upvote.classList.add('upvote');
        upvote.setAttribute('src', "/assets/imgs/upvote.png");

        let score = document.createElement('div');
        scoreDiv.appendChild(score);
        score.classList.add('score');
        score.innerText = post.score;

        let downvote = document.createElement('img')
        scoreDiv.appendChild(downvote);
        downvote.classList.add('downvote')
        downvote.setAttribute("src", "/assets/imgs/downvote.png");

        upvote.addEventListener('click', () => {
          upvoter(post.id);
          upvote.setAttribute('src', "/assets/imgs/upvoted.png");
          score.innerText = Number(score.innerText) + 1;
        })

        downvote.addEventListener('click', () => {
          downvoter(post.id);
          downvote.setAttribute("src", "/assets/imgs/downvoted.png");
          score.innerText = Number(score.innerText) - 1;
        })

        deleteButton.addEventListener('click', () => {
          deleter(post.id);
          postParent.removeChild(postItem);
        })

      });
    }
  }
  myRequest.send();
}