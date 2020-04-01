const url = "http://localhost:4001";

// don't add public on the end
const images_folder = url + "/";
const show_items = url + "/api/itemdetails";


// // POST
// const add_item = url + "/api/itemdetails";


// POST
const post_comment = url + "/api/comments";

export {
  url,
  show_items,
//   add_item,
  post_comment,
  images_folder
};
