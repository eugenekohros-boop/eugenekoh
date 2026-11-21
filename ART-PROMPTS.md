# Painted artwork (optional)

Every banner on the site is drawn in code (SVG), so the site is complete as it is. If you'd like richer,
painterly images, you can generate them with ChatGPT, Gemini or another image tool and drop them in.

## How to swap one in

1. Generate an image with one of the prompts below. Ask for a **wide landscape, about 2400 × 880 px**,
   and keep the important parts in the **middle and lower half** (the top and the centre-bottom get
   covered by the title card on narrow screens).
2. Save it as `.webp` or `.jpg` in `src/assets/img/scenes/`.
3. In the paper's file (in `src/research/papers/`), add two lines to the top section:
   ```yaml
   image: /assets/img/scenes/sunlight.webp
   image_alt: "A warm sun over green hills with a large leaf in the foreground"
   ```

## Style line (add this to every prompt)

> Hand-painted Japanese animation background art, soft gouache and watercolour texture, gentle pastel
> colours, warm diffused light, towering cumulus clouds, calm and nostalgic mood, highly detailed foliage,
> no people, no characters, no text, wide cinematic landscape.

## Scene prompts

| Scene (`art:`) | Used for | Prompt |
| --- | --- | --- |
| `meadow` | Home page, PEO | Rolling green summer hills under an enormous white cumulus cloud, one large round-canopied tree on a hill, a small cream cottage with a red roof and a winding dirt path, dandelion seeds drifting on the breeze. |
| `sunlight` | Singlet oxygen papers | A warm peach-and-butter sky with a soft glowing sun and visible light rays, gentle green hills, one large translucent leaf in the foreground catching sunlight, tiny golden sparkles rising from it. |
| `dusk` | Singlet-oxygen detection, 2014 paper, Teaching page | A lavender-to-peach dusk over blue-green hills, a pale moon, a small cottage with warmly lit windows, dozens of fireflies glowing in the long grass. |
| `network` | AI review, Computational Thinking course | Same dusk landscape, but faint lines join the first stars into a delicate constellation network, like a map of connected ideas. |
| `fungus` | Cercosporin paper | A misty, sun-dappled forest floor with soft light shafts, tall pale tree trunks, clusters of small pastel mushrooms, drifting spores, and one leaf with round brown spots ringed in yellow. |
| `evolution` | Kingdom-wide stress atlas, Research page | A dotted footpath winding from a small pond with algae and lily pads, past mossy rocks, ferns and young conifers, to a tree in pink blossom: plant evolution as a walk through a landscape. |
| `pollen` | Pollen paper | A pink-and-cream sky over a meadow full of small pastel wildflowers, three tall flowers in the foreground, golden pollen grains floating through the air. |
| `greenhouse` | Hydroponics paper, Tools page | A small arched glasshouse on a sunny hillside, filled with neat rows of lettuce, spinach and leafy greens, light glinting on the glass. |
| `pines` | Carbon-monoxide paper | A sun-baked golden hillside with three umbrella-shaped Mediterranean pine trees, shimmering summer heat, faint wisps rising from the needles. |

## A portrait

Put a square photo at `src/assets/img/portrait.jpg` and it replaces the sprout placeholder on the home page.
Many image tools can also repaint a photo in a soft, hand-painted animation style if you prefer that.
