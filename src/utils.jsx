const url = "http://localhost:4001";

// don't add public on the end
const images_folder = url + "/assets/";
const show_items = url + "/api/itemdetails";
const update_item = url + "/api/itemdetails";
const show_women = url + "/api/itemdetails/women";
const show_men = url + "/api/itemdetails/men";
const assets_url = url + "/assets/";

//debug.log
//[0403/083708.895:ERROR:settings.cc(320)] Settings magic is not 1129342067

// // POST
// const add_item = url + "/api/itemdetails";

// POST
const post_comment = url + "/api/comments";

export {
  url,
  show_items,
  update_item,
  show_women,
  show_men,
  //   add_item,
  post_comment,
  assets_url,
  images_folder,
};
