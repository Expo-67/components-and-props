import React from "react";

// date default to January 1,1970
function Article({ title, date = "January 1,1970", preview, minutes }) {
  let emojis = "";
  if (minutes < 30) {
    const cups = Math.ceil(minutes / 5);
    emojis = "☕".repeat(cups);
  } else {
    // for every 10 minutes case
    const bento = Math.ceil(minutes / 10);
    emojis = "🍱".repeat(bento);
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date}. {emojis}
        {minutes}min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
