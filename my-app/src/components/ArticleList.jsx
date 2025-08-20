import React from "react";
import Article from "./Article";
// posts passed down as props
const ArticleList = ({ posts }) => {
  return (
    <main>
      {/* using .map to loop through the list and displaying the items */}
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutes={post.minutes}
        />
      ))}
    </main>
  );
};

export default ArticleList;
