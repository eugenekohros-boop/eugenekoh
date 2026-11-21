// Every file in this folder is a talk or lecture.
// A talk gets its own page (at /teaching/lectures/<file-name>/) once it has slides, a video,
// or `has_page: true`. Otherwise it is simply listed on the Teaching page.
export default {
  layout: "layouts/lecture.njk",
  eleventyComputed: {
    permalink: (data) =>
      data.slides || data.video || data.has_page ? `/teaching/lectures/${data.page.fileSlug}/` : false,
  },
};
