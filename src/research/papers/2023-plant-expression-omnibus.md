---
title: "PEO: Plant Expression Omnibus — a comparative transcriptomic database for 103 Archaeplastida"
plain_title: "An atlas of gene activity for 103 plant species"
date: 2023-12-05
cite_year: 2024   # published online Dec 2023; the print issue (and PubMed citation) is 2024
journal: "The Plant Journal"
volume: "117"
issue: "5"
pages: "1592–1603"
authors: "Koh E, Goh W, Julca I, Villanueva E, Mutwil M"
role: "First author · lead developer"
thread: kingdom
art: meadow
art_label: "Rolling green hills under towering summer clouds, with a big tree and a red-roofed cottage"
icon: sprout
doi: "10.1111/tpj.16566"
pubmed: "38050352"
links:
  - label: "Open PEO"
    url: "https://expression.plant.tools/"
nutshell: "Thousands of plant RNA-seq experiments sit in public archives, but they are hard to compare across species. The Plant Expression Omnibus (PEO) brings about 60,000 hand-annotated samples from over 100 species together in one free website. Anyone can look up a gene, see which organs it is active in, and find the genes that work alongside it."
stats:
  - value: "103"
    label: "species across the plant kingdom (Archaeplastida)"
  - value: "~60,000"
    label: "manually annotated RNA-seq samples"
  - value: "4 M+"
    label: "genes you can look up"
glossary:
  - term: "Archaeplastida"
    def: "The large group of organisms that includes land plants, green algae, red algae and glaucophytes."
  - term: "RNA-seq"
    def: "Sequencing all the RNA in a sample to measure how active each gene is."
  - term: "Co-expression"
    def: "Genes whose activity rises and falls together across many samples. Co-expressed genes often work in the same process."
  - term: "Organ-specific gene"
    def: "A gene that is active mainly in one organ, such as the flower, root or seed."
---

## The problem

Public archives hold an enormous amount of plant gene-expression data. But it is scattered across thousands of studies, labelled inconsistently, and hard to compare between species. For most plants, a biologist with a gene of interest has no easy way to ask "where in the plant is this gene active, and what does it work with?"

## What we built

**PEO** is a web application that gives biologists access to gene-expression data across over 100 plant species, about 60,000 manually annotated RNA-seq samples and more than 4 million genes. With it you can:

- **explore expression across organs** for any gene;
- **find organ-specific genes**, for example genes active mainly in flowers or roots;
- **discover the top co-expressed genes** for any gene of interest;
- **read functional annotations** for each gene, which help to pick out genetic modules and pathways.

## Two case studies

The paper shows PEO at work on two questions. The first is finding candidate genes for **pollen coat biosynthesis** in *Arabidopsis*. The second is identifying parts of the **capsaicin biosynthesis pathway** in chilli pepper (*Capsicum annuum*); capsaicin is the compound that makes chillies hot.

## Why it matters

PEO lets any plant biologist run kingdom-wide, comparative gene-expression analyses through a web browser, with no coding needed. It is freely available at [expression.plant.tools](https://expression.plant.tools/).
