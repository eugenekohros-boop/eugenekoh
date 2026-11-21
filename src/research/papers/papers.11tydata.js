// Every file in this folder becomes a publication page at /research/<file-name>/
export default {
  layout: "layouts/publication.njk",
  permalink: "/research/{{ page.fileSlug }}/",
};
