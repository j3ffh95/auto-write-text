const text =
  "The mountain may seem very high, It reaches even to the sky, And yet the picture holds it all As well as things quite near and small, Ans then the picture's but a nook In my small picture reading book.";

let index = 0

conts writeText = () => {
  document.body.innerText = text.slice(0, index)

  index++;

  if(index > text.length) index = 0;
}
