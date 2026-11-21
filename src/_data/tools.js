// Bioinformatic tools. To add one, copy a block below.
export default [
  {
    name: "PEO",
    longName: "Plant Expression Omnibus",
    url: "https://expression.plant.tools/",
    icon: "sprout",
    role: "Lead developer",
    description:
      "Look up any gene in over 100 plant species. See which organs it is active in, find genes that are specific to an organ, and list the genes whose activity rises and falls with it.",
    stats: [
      { value: "103", label: "species" },
      { value: "~60k", label: "RNA-seq samples" },
      { value: "4M+", label: "genes" },
    ],
    paper: "/research/2023-plant-expression-omnibus/",
  },
  {
    name: "StressCoNekT",
    longName: "Stress database for hydroponic leafy crops",
    url: "https://stress.plant.tools/",
    icon: "greenhouse",
    role: "Co-author of the paper that introduced it",
    description:
      "Gene activity data for hydroponic cai xin, lettuce and spinach grown under 24 stress and nutrient treatments, with tools for comparing the three crops.",
    stats: [
      { value: "3", label: "leafy crops" },
      { value: "24", label: "treatments" },
      { value: "276", label: "RNA-seq libraries" },
    ],
    paper: "/research/2025-hydroponic-leafy-crops/",
  },
];
