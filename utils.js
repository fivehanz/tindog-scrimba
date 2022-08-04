const mainBody = document.getElementById("main-body");

const renderBody = (data) => {
  const { name, age, bio, avatar } = data;
  mainBody.innerHTML = `
    <img class="main-image" src="${avatar}" alt="dog-image">
    <img id="like-badge" class="like-badge" src="/images/badge-like.png" alt="like-badge">
    <img id="nope-badge" class="nope-badge" src="/images/badge-nope.png" alt="nope-badge">
    <p class="text-primary">${name}, ${age}</p>
    <p class="text-secondary">${bio}</p>
`;
};

export { renderBody };
