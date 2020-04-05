# Roll20 Character Sheet Template

As this is a french RPG based on the D&D 5e SRD, all comments and files will in French.

# Contribuer

Comme vous pourrez le remarquer, cette fiche de personnage utilise [Pug](https://pugjs.org/api/getting-started.html) et [SCSS](https://sass-lang.com/).

**AVERTISSEMENT !!** NE MODIFIEZ PAS DIRECTEMENT LE HTML/CSS !
Si vous modifiez directement les fichiers html/css, ces modifications seront ECRASEES par la prochaine compilation de Pug, et tout sera definitivement perdu !

_TODO: Ajouter les differentes installations possible: Windows/MacOS/Linux_

La premiere etape pour pouvoir contribuer est d'installer la CLI (command line interface) de Pug.

Verifiez sa presence en lancant `pug --version`

Une fois cela fait, il suffit de lancer votre terminal habituel, de vous rendre dans le dossier contenant la fiche de personnage (celui avec `pug.pug`), puis de lancer la commande `pug -w . -o . -P` (equivalent longue version `pug --watch . --out . --pretty`).

Vous allez lancer `pug` en mode `--watch` dans le dossier courant, ce qui va permettre a `pug` de recompiler le html a chaque fois que vous modifiez un fichier pug. Le flag `--out` donne le dossier de destination des fichiers html compiles (ici le dossier courant), et le flag `--pretty` va vous donner une sortie de html agreable a lire.

Voila, vous devriez avoir les infos necessaires !

# Remerciements

L'inspiration majeure pour cette fiche de personnage vient de la [fiche suivante](https://www.black-book-editions.fr/forums.php?topic_id=12619&nop=) par DarkDindon et GhorGhorBlue.

Merci a eux !
