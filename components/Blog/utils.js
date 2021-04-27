const axios = require("axios");

export function handleBlogSubmit(title, content, date) {
  axios({
    method: "post",
    url: "http://localhost:3001/create",
    data: {
      title: title,
      content: content,
      datecreated: date,
    },
  });
}
