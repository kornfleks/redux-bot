# redux-bot

## Installation

Install dependencies:
`$npm i`

Run:
`$npm start`

## Test suites

Les tests suites sont un enchainement d'entrées utilisateur (à décommenté dans l'entrypoint: `src/index.js`).
Si vous voulez les lancer il faut commenter `startPrompt(createUnitStore())`.

## Prompt

Permet de tester les actions, déduit des intentions par le mapper (qui n'est pas implémenté ici).
Sur le prompt n'importe quelle champs peut être laissé vide.
On peux répondre par du texte (select: `type text`), ex: le bot demande pour quelle film ajouter X billet, mais aussi par d'autre action (intent).
/!\ Pour les valeurs booleene il faut utiliser `1` et `0`, ex: `REPLY_MOVIE_SUGGESTION accept = "0" | "1"`
