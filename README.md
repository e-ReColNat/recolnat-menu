# Menu général ReColNat

## Intégration

Le menu général ReColNat est prévu pour apparaître dans chaque application de l'écosystème ReColNat.

Le WP5 a opté pour un mode d'intégration reposant sur une ``iframe`` :

- pointant vers une URL publique stable à laquelle est disponible le menu ;
- devant être déclarée (avec un peu de style CSS) dans les *templates* des applications souhaitant intégrer le menu.

Ceci possède au moins deux avantages :

- Intégrer le menu demande une modification minime du code (un élément HTML et une règle CSS), et aucune modification n'est nécessaire si le menu change (sauf bien entendu si son URL change).
- Disposant de sa propre URL, le menu peut être vu comme une application à part entière, capable d'accéder à des données via un (futur) *backend* côté serveur.

À ce jour, le menu est disponible à l'URL : [http://wp5test.mnhn.fr/menu/](http://wp5test.mnhn.fr/menu/).

Un exemple d'intégration *in vivo* est également accessible à l'URL : [http://wp5test.mnhn.fr/menu-test/](http://wp5test.mnhn.fr/menu-test/). Révéler la source de la page permet de voir l'``iframe``.

Enfin, le menu est conforme à la charte graphique ReColNat (couleurs et fonte), que nous proposons sour forme de [package NPM](https://github.com/Amleth/recolnat-style-guide). Les pictogrammes sont issus du site [Iconfinder](https://www.iconfinder.com/).

Les effets d'intégration visuelle supplémentaires (ombrage, transparance générale du menu, etc.) sont laissés à discrétion de l'intégrateur.

## Évolutions à discuter

- La compatibilité sur tous les navigateurs n'a pas été pleinement testée (*pull requests* bienvenues ;-)).
- Affichage du nom de l'utilisateur/trice connecté-e (+ lien vers sa page profil), et éventuellement d'une miniature de sa photo.
- Affichage du nombre total d'utilisateurs inscrits.

## À propos de ce dépôt

Le menu est une application [React](http://facebook.github.io/react/), utilisant [webpack](http://webpack.github.io/) et [Gulp](http://gulpjs.com/) pour les tâches de développement et de compilation.

Le contenu du menu (intitulés des liens + pictogrammes) est déclaré dans le fichier ``src/menu-data.js``.