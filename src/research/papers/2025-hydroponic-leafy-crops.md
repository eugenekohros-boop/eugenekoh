---
title: "Cross-species analysis of abiotic stress in hydroponic leafy crops reveals conserved regulatory networks and key divergences"
plain_title: "Stress-proofing the leafy greens of indoor farms"
date: 2025-07-07
journal: "Frontiers in Plant Science"
volume: "16"
pages: "1613016"
authors: "Lee JM, Goh JC, Koh E, Mutwil-Anderwald D, Mutwil M"
role: "Co-author"
thread: field
art: greenhouse
art_label: "A glasshouse full of leafy greens on a sunny hillside"
icon: greenhouse
doi: "10.3389/fpls.2025.1613016"
pubmed: "40692674"
pmc: "PMC12277361"
links:
  - label: "StressCoNekT database"
    url: "https://stress.plant.tools/"
nutshell: "Hydroponic farms grow leafy greens indoors, without soil, in tightly controlled conditions. To learn how these crops cope when conditions go wrong, we grew cai xin, lettuce and spinach under 24 different stress and nutrient treatments and compared their gene activity. Some of the gene networks behind the stress response are shared by all three crops, and all the data are in a free online database, StressCoNekT."
stats:
  - value: "3"
    label: "leafy crops: cai xin, lettuce and spinach"
  - value: "24"
    label: "environmental and nutrient treatments"
  - value: "276"
    label: "RNA-seq libraries"
glossary:
  - term: "Hydroponics"
    def: "Growing plants without soil, with their roots in a nutrient solution, usually in a controlled environment."
  - term: "Photoperiod"
    def: "The number of hours of light a plant gets each day."
  - term: "Gene regulatory network (GRN)"
    def: "A map of which genes control which. Usually it links transcription factors (genes that switch other genes on or off) to their targets."
  - term: "Orthologs"
    def: "Equivalent genes in different species that descend from the same ancestral gene."
  - term: "Transcription factor families"
    def: "Groups of related gene-regulating proteins. WRKY, AP2/ERF and GARP are families well known for roles in plant stress and development."
---

## The question

Hydroponics is becoming an important way to grow leafy vegetables reliably, especially in cities with little farmland. But even in controlled environments, temperature, light and nutrient supply can go wrong. How do hydroponic crops respond to stress, and do different crops respond in the same way?

## What we did

We grew three leafy crops (cai xin, lettuce and spinach) hydroponically and exposed them to **24 environmental and nutrient treatments**. For each treatment we measured growth and sequenced RNA, 276 RNA-seq libraries in total.

We then built a new pipeline that combines regression-based inference of gene networks with orthology (matching equivalent genes across species). This let us find gene regulatory networks shared by all three crops.

## What we found

- **What holds growth back.** Extreme temperatures, shorter photoperiods and severe nitrogen, phosphorus or potassium deficiency all significantly reduced fresh weight.
- **A common response.** All three crops strongly turned down photosynthesis genes and turned up genes for stress responses and signalling.
- **Conserved gene networks.** Some gene regulatory networks are conserved across all three crops. This is the first cross-species analysis of stress-responsive networks in these economically important vegetables. The networks are anchored by well-known transcription-factor families (WRKY, AP2/ERF, GARP), but in places they differ from *Arabidopsis*, so some key regulators have partly diverged.
- **An open resource.** We released all the data in [StressCoNekT](https://stress.plant.tools/), an interactive database with tools for comparing species.

## Why it matters

Knowing which stress genes are shared across crops helps breeders find robust targets for stress-resilient varieties. The study also lays groundwork for "smart" controlled-environment agriculture, in which growing conditions are tuned to the crop's stress biology.
