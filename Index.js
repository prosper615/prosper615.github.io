


const posts = [
  { title: "", file: "Log1.html" },
  { title: "", file: "Log2.html" }
];

const postList = document.getElementById("post-list");

posts.forEach(post => {
  const li = document.createElement("li");
  const link = document.createElement("a");
  link.href = post.file;
  link.textContent = post.title;
  li.appendChild(link);
  postList.appendChild(li);
});
