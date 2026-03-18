# [Whale of Fortune](https://whale.yoerger.me)

Whale of Fortune is a mobile-focused web application for [Blood on the Clocktower](https://bloodontheclocktower.com/). It allows the storyteller to dynamically draw randomized combinations of character roles.

## Gameplay Variant
This application is designed to support a specific Blood on the Clocktower draft variant where players are assigned roles from a randomly generated pool of choices, rather than from a preconstructed set of roles.

### How to Play
1. **Role Assignment**: Before drawing, the Storyteller assigns each player their team alignment (Townsfolk, Outsider, Minion, or Demon) based on player count. The method of assigning these alignments is up to the Storyteller.
2. **Initial Draw**: The Storyteller consults each player individually and draws **3 roles** from their designated team alignment (e.g., Townsfolk). 
3. **First Choice**: The player may select one of the three drawn roles to be their character for the game.
4. **First Mulligan**: If the player dislikes all three options, they may mulligan. The Storyteller will draw **2 new roles**. The player may choose one of these two.
5. **Final Mulligan**: If the player still dislikes the options, they may mulligan a final time. The Storyteller draws **1 final role**, and the player is required to play that character.
6. **Storyteller Balance**: The Storyteller is encouraged to take free, secret mulligans when drawing options for players in order to curate a balanced and enjoyable game state.

## Website Features

* **Drafting:** Filter the available character pool by team alignment (Townsfolk, Outsider, Minion, Demon).
* **Generation:** Randomly draw 1, 2, or 3 unique characters from the selected pool.
* **Role Information:** Generated cards display the official character artwork, name, and ability text.
* **Selection:** Cards can be clicked to toggle a highlighted state.

## Technology Stack

* Vite
* TailwindCSS
* DaisyUI
* Vanilla JavaScript

## Disclaimer
This project is not affiliated with the [Pandemonium Institute](https://bloodontheclocktower.com/pages/about-us).  Go support them!

This project uses official game artwork and ability texts.  Artwork is sourced from the official script website, and not stored within the application.