// Every file in this folder is a course, with its own page at /teaching/courses/<file-name>/
export default {
  layout: "layouts/course.njk",
  permalink: "/teaching/courses/{{ page.fileSlug }}/",
};
