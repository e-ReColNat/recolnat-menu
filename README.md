# Menu général ReColNat

## Intégration

Le menu général ReColNat est prévu pour apparaître dans chaque application de l'écosystème ReColNat.

Le WP5 a opté pour un mode d'intégration reposant sur une ``iframe`` :

- pointant vers une URL publique stable à laquelle est disponible le menu ;
- devant être déclarée (avec un peu de style CSS) dans les *templates* des applications souhaitant intégrer le menu.

Ceci possède au moins deux avantages :

- Intégrer le menu demande une modification minime du code (un élément HTML et une règle CSS), et aucune modification n'est nécessaire si le menu change (sauf bien entendu si son URL change).
- Disposant de sa propre URL, le menu peut être vu comme une application à part entière, capable d'accéder à des données via un (futur) *backend* côté serveur.

Le menu est déployé et disponible à l'URL : [http://wp5prod.recolnat.org/menu/](http://wp5prod.recolnat.org/menu/).

Le menu est conforme à la charte graphique ReColNat (couleurs et fonte), que nous proposons sour forme de [package NPM](https://github.com/Amleth/recolnat-style-guide). Les pictogrammes sont issus du site [Iconfinder](https://www.iconfinder.com/).

Les effets d'intégration visuelle supplémentaires (ombrage, transparance générale du menu, etc.) sont laissés à discrétion de l'intégrateur.

L'intégration avec le CAS se fait par l'application qui gère les sessions indépendemment du menu mais doit lui indiquer un ensemble de paramètres permettant de mettre à jour l'affichage du menu. Le bouton "Me Connecter" redirige le ticket de connexion vers l'application contenant le menu.

### Instructions

L'intégrateur doit ajouter le contenu suivant dans les pages HTML où où la barre doit apparaitre :
```HTML
<iframe id="recolnatMenu" class="recolnat-menu" seamless="seamless" scrolling="no" src="http://wp5prod.recolnat.org/menu/"></iframe>
<script type="text/javascript">
</script>
```
Cet ```<iframe>``` doit toujours être contenu dans le document parent (et pas dans un autre iframe au niveau du parent par exemple). Ceci pour éviter les problèmes liés aux politiques de sécurité cross-domaine.

La classe CSS recolnat-menu correspondant dans les feuilles de style :

```CSS
 .recolnat-menu {
    border: medium none;
    height: 35px;
    overflow: hidden;
    position: fixed;
    width: 100%;
}
```

Le menu doit être informé de l'utilisateur connecté s'il y en a un, et de l'URL pour accéder à son profil. Cette action doit être faite après le chargement complete de la page en envoyant un message POST vers l'iframe contenant le menu. Ce message doit être de type "user" et doit contenir un username correspondant au nom affiché choisi par l'utilisateur et un userProfile qui est un URL vers la page profil utilisateur.
```Javascript
window.onload = function() {
var frame = document.getElementById("recolnatMenu").contentWindow;
frame.postMessage({type: "user", username: "MyUserName", userProfile: "http://foo.bar.com/myProfile"}, "http://wp5prod.recolnat.org/menu/");
}
```

Finalement, les pages accueillant la barre de menu doivent être capables de récéptionner les messages POST de demande de redirection de la part du menu (source: http://wp5prod.recolnat.org). Ces messages se présentent sous la forme
```Javascript
{ type: "redirect", action: "action", url: "URL"}
```
Au choix, l'application parent peut utiliser l'URL ou l'action pour déterminer les actions à entreprendre lors de la récéption d'un message. Les actions actuellement renvoyées sont:
- ``login``, redirection vers le CAS pour connecter l'utilisateur
- ``profile``, redirection vers la page profil de l'utilisateur dans l'application actuelle
- ``logout``, redirection vers le CAS pour déconnecter l'utilisateur, ou suppression du cookie associé au CAS.

### Exemple

Un exemple d'intégration *in vivo* est également accessible à l'URL : [http://wp5prod.recolnat.org/menu-test/](http://wp5prod.recolnat.org/menu-test/). Révéler la source de la page permet de voir l'``iframe``.

Une version avec le message POST après chargement est à [http://wp5prod.recolnat.org/menu-test-logged/](http://wp5prod.recolnat.org/menu-test-logged/). La source de la page montre un exemple de script JS dans le <head> de la page HTML.

## Évolutions à discuter

- La compatibilité sur tous les navigateurs n'a pas été pleinement testée (*pull requests* bienvenues ;-)).
- Intégration avec le CAS. Affichage du nom de l'utilisateur/trice connecté-e (+ lien vers sa page profil), et éventuellement d'une miniature de sa photo.
- Affichage du nombre total d'utilisateurs inscrits.
- Mise en place du lien vers le Laboratoire (quand ce dernier aura une page d'entrée).

## À propos de ce dépôt

Le menu est une application [React](http://facebook.github.io/react/), utilisant [webpack](http://webpack.github.io/) et [Gulp](http://gulpjs.com/) pour les tâches de développement et de compilation.

Le contenu du menu (intitulés des liens + pictogrammes) est déclaré dans le fichier ``src/menu-data.js``.