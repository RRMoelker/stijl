In deze repo wordt de huisstijl van data.amsterdam.nl bewaard en bewaakt.

# Usage
Voeg de volgende regel toe in je package.json:

`"stijl": "git+https://git@github.com/Amsterdam/stijl.git"`

## Ams-stijl.css
Je kan nu in jouw project `node_modules/stijl/dist/css/ams-stijl.css` toevoegen om gebruik
te maken van de amsterdam huisstijl.

### Amsterdam-componenten
Zie https://patternlab-amsterdam.infoprojects.nl/?p=all de beschikbare classes en patronen voor componenten (form elements, alerts, etc, etc).

### Grid
Voor het grid maken we gebruik van bootstrap 4. Zie https://getbootstrap.com/docs/4.1/layout/grid/ voor referentie.

### Gebruik maken van variables
Importeer een of meerdere files van de `node_modules/stijl/dist/scss/` folder in jouw .scss files.

## Fonts
De fonts staan in `node_modules/stijl/dist/fonts`. In de css wordt er verwezen naar `../fonts/`. Hou hier rekening mee bij het gebruiken van de stijl repo in jouw project.

# Contribute
* run `npm install`
* run `npm build`

Bij het committen wordt de `npm build` commando automatisch uitgevoerd om er zeker van de zijn dat alle wijzigingen beschikbaar zijn in de `/dist` folder.

**De `/raw-source` folder is deprecated, refereer hier niet meer naar in nieuwe projecten en update de bestaande projecten zsm zodat deze verwijzen naar de `/dist` folder**