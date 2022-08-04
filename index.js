// Remember to import the data and Dog class!
import Dog from "./Dog";
import { dogs } from "./data";
import { renderBody } from "./utils";

const nopeButton = document.getElementById("nope-button");
const likeButton = document.getElementById("like-button");

// initialize the dogs
const getNextDog = () => {
  const nextDog = dogs.shift();
  return nextDog ? new Dog(nextDog) : false;
};

const renderNextDog = () => {
  currentDog = getNextDog();
  currentDog ? renderBody(currentDog) : false;
};

// render the first dog
let currentDog = getNextDog();
renderBody(currentDog);

const doLike = () => {
  // show like badge
  document.getElementById("like-badge").style.display = "block";

  // process current dog
  currentDog.processLike();

  // wait for few seconds
  setTimeout(renderNextDog, 1000);
};

const doNope = () => {
  // show like badge
  document.getElementById("nope-badge").style.display = "block";

  // process current dog
  currentDog.processNope();

  // wait for few seconds
  setTimeout(renderNextDog, 1000);
};

likeButton.addEventListener("click", doLike);
nopeButton.addEventListener("click", doNope);
