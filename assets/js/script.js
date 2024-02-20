function newComment() {
  let divCommentSection = document.createElement('div');
  divCommentSection.className = 'comment-section';
  let divProfileUser = document.createElement('div');
  divProfileUser.className = 'profile-user';
  let userCommentInput = document.getElementById('user-comment-input').value;
  let divVoteButton = document.createElement('div');
  divVoteButton.className = 'vote-button';
  let divUserCommentSection = document.createElement('div');
  divUserCommentSection.className = 'user-comment-section';

  if (userCommentInput == '') {
    alert('Please Type Something!');
  } else {
    divUserCommentSection.innerHTML = userCommentInput;

    divProfileUser.innerHTML = `<img src="assets/images/john_doe.svg" alt="John Doe" class="picture-user" id="picture-user"><div class="user-name" id="user-name">John Doe</div>`;

    divVoteButton.innerHTML = `<img src="assets/images/arrow_up.svg" alt="Arrow Up" class="arrow-up">
  <img src="assets/images/arrow_down.svg" alt="Arrow Down" class="arrow-down">`;

    divCommentSection.append(divProfileUser);
    divCommentSection.append(divUserCommentSection);
    divCommentSection.append(divVoteButton);

    let firstComment = document.getElementsByClassName('comment-section');

    document.getElementById('people-comments').insertBefore(divCommentSection, firstComment[0]);
  }

  document.getElementById('user-comment-input').value = '';
  document.getElementById('user-comment-input').placeholder = 'type something...';
}
