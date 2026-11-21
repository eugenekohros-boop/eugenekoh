---
title: "Kingdom-wide comparative transcriptomics reveals deeply conserved and predictable stress response programs across Viridiplantae"
plain_title: "A stress playbook shared by 700 million years of plants"
date: 2026-10-08
journal: "Molecular Plant"
status: "Online ahead of print"
authors: "Koh E, Peh LH, Tan S, Koh TS, Chin LL, Ho BC, Mutwil M"
role: "First author"
thread: kingdom
art: evolution
art_label: "A dotted trail running from a pond of algae past mosses, ferns and conifers to a flowering tree"
icon: sprout
doi: "10.1016/j.molp.2026.10.001"
pubmed: "42850882"
nutshell: "Green algae, mosses, ferns and flowering plants have been evolving apart for more than 700 million years, yet they still respond to stress in similar ways. We built an atlas of how 36 species respond to nine kinds of stress, found the parts of that response that all of them share, and showed that AI models can predict a gene's stress response from its DNA sequence alone."
stats:
  - value: "36"
    label: "species, from green algae to flowering plants"
  - value: "9"
    label: "abiotic and biotic stresses"
  - value: "3,200+"
    label: "hand-curated control vs. stress comparisons"
  - value: "13.6 M"
    label: "calls of a gene going up or down"
glossary:
  - term: "Viridiplantae"
    def: "The green plants: green algae plus all land plants (mosses, liverworts, ferns, conifers and flowering plants)."
  - term: "Transcriptome"
    def: "A snapshot of which genes are switched on in a tissue at a given moment, and how strongly. It is usually measured by RNA sequencing (RNA-seq)."
  - term: "Gene family"
    def: "A group of genes, often spread across many species, that all descend from the same ancestral gene."
  - term: "Whole-genome duplication"
    def: "An event in which an organism's entire genome is copied. Plants have gone through many, and the spare gene copies are raw material for new functions."
  - term: "Foundation model"
    def: "A large AI model trained on huge amounts of DNA or RNA sequence, which can then be adapted to specific prediction tasks."
---

## The question

Every plant has to cope with drought, heat, cold, salt, too much light and attacking microbes. We know a lot about how a few model species, such as *Arabidopsis*, respond to stress. We know much less about how much of that response is shared across the whole green-plant kingdom, and how much each lineage invented for itself.

## What we did

We built a kingdom-wide **stress transcriptome atlas** covering 36 species, from single-celled green algae to flowering plants, under nine abiotic and biotic stresses. Most of it comes from reanalysing public RNA-seq data. Public data are scarce for the early-branching lineages, so we ran new stress experiments on three species from those groups.

We curated every one of the more than 3,200 control-versus-stress comparisons by hand. Together they give 13.6 million calls of a gene going up or down.

## What we found

- **Old and new genes divide the work.** Ancient gene families respond to many stresses, but only moderately. Gene families found in only one lineage respond to few stresses, but strongly.
- **Shared responses fade slowly.** The more distantly related two species are, the less their stress responses overlap. Even so, the overlap is still detectable across **more than 700 million years** of divergence. Genes that switch *on* under stress have changed faster over evolution than genes that switch *off*.
- **An ancient growth–defence trade-off.** Across the kingdom, stressed plants turn down growth while they turn up defence. On top of that shared core, each stress rewires gene activity in its own way.
- **Duplicated genes split the job.** Groups of genes that respond to stress together are conserved. Within these groups, duplicated genes divide the original regulatory role between them. Gene pairs that came from whole-genome duplications tend to stay in the same group.
- **The response is partly written in the DNA.** DNA and RNA foundation models predicted whether a gene responds to stress from its sequence alone. Their accuracy score (auROC) was 0.755, where 0.5 is a coin toss and 1.0 is perfect. This points to a partly shared regulatory code across the kingdom.

## Why it matters

Most crop research starts from a few model species. An atlas spanning the whole green lineage shows which stress responses are deeply rooted, and so more likely to carry over between species, and which are recent inventions of one lineage. Because sequence alone partly predicts stress responses, candidate stress-resilience genes in crops could be found computationally before any experiment is run.
