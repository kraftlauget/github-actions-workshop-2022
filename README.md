# Github Actions workshop med Kraftlauget

Vi ønsker dere hjertelig velkommen til vår Github Actions workshop. 


## Hva er Github Actions?

Det er ikke uvanlig å møte på problemer når man integrerer ny kode i et allerede eksisterende prosjekt. Dette kan være i form av merge-conflics, feilende tester, osv. Dette er problemer som ofte forsterkes ved at det er lenge siden man har integrert koden. Intuitivt sett gir dette mening; e.g. man møter sannsynligvis på flere problemer når man prøver å merge en commit på 1000 linjer som har vært innom mange filer enn når man merger en commit på 10 linjer som kun endrer på én fil.

Dette er hovedtanken bak CI/CD (Continuous integration / Continuous development). Integrer kode ofte for å minimere mengden feil (og hodepine) man møter underveis. 

For å gjøre denne integrasjonsprosessen enda litt enklere kan man automatisere mange av stegene som er nødvendig i en slik pipeline, f.eks testing, linting, osv. Til dette formålet bruker vi en CI/CD platform, i vårt tilfelle **Github Actions**.


Github Actions er en tjeneste som leveres av github (gratis i open-source prosjekter), og er tilgjengelig i alle repoer på Github. Alt som trengs er en (eller flere) workflow-fil(er) hvor man definerer hva man ønsker at skal skje.
> Workflow-filen må defineres i `.github/workflows` mappen og filen må være av typen `.yml` (YAML)


### Eksempel på en workflow ([tilpasset fra her](https://docs.github.com/en/actions/quickstart))
```
 1.    name: GitHub Actions Demo
 2.    on: [push]                               # <- Her defineres ønskede event-triggers
 3.    jobs:
 4.      Github-Actions-Eksempel:
 5.        runs-on: ubuntu-latest               # <- Hvilket OS man ønsker å kjøre kommandoene/stegene i.
 6.        steps:                               # <- Stegene i jobben som heter Github-Actions-Eksempel
 7.          - run: echo "En ${{ github.event_name }} event"
 8.          - run: echo "Programmet kjører virtuelt på et ${{ runner.os }} operativsystem."
 9.          - run: echo ""
10.          - name: Check out repository code  # <- For å aksessere koden brukes denne Actionen.
11.            uses: actions/checkout@v2

```

I eksemplet over kan man bli kjent med strukturen til en typisk workflow. Det kan nesten ses på som en slags punktliste med visse steg man alltid må gjennom. Noen steg er "viktigere" enn andre (konseptuelt sett). 
- Det er for eksempel viktig å definere når du ønsker at workflowen skal kjøres (det gjøres på linje 2). 
- Så må man definere minst en jobb. I dette tilfellet er det kun en jobb som heter Github-Actions-Eksempel, men det er ofte flere. Dersom flere er definert vil de kjøre parallelt med mindre noe annet er spesifisert ("needs" nøkkelordet).
- Man må definere hvilket underliggende operativsystem jobben skal kjøre på. I dette tilfellet (linje 5) ubuntu-latest. Andre alternativer er feks windows-latest / macos-latest. (Ideelt sett burde man definere en spesifikk versjon)
- Enhver jobb har flere steg. Her kan man gjøre alt fra å kjøre enkle terminalkommandoer til å kjøre store skript. Det er også her man spesifiserer hvilke actions man ønsker å bruke.
- *Andre:* Containers & Image, Branches, Tags, Needs, [Mye mer](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)



## Nyttige Actions
- Checkout
    - "Leser" på en måte koden slik at man kan aksessere den. Nødvendig når man skal gjøre operasjoner som er avhengig av å vite hvordan koden ser ut. F.eks bygging.
- Upload Artifacts
    - "Lagrer" filer slik at man kan bruke de flere steder. Man kan f.eks lagre et helt bygg og bruke det i en annen jobb.
- Download Artifacts
    - "Laster inn" lagrede filer.


Markedplace: https://github.com/marketplace?type=actions


## Oppgaven

Oppgaven i dag går først og fremst ut på å reparere den ødelagte bygge-pipelinen som er utdelt. Deretter vil målet være å minimere byggetiden. Gruppen som har den raskeste pipelinen innen konkurransen er over vinner premien!

Viktig:
- Det er kun det aller siste bygget/runnet som teller! Så om dere er fornøyd kan det være lurt å la ting ligge.
- Jobb kun i deres gruppes spesifikke branch.
- Pipelinen **må** bygge, teste og linte.
- Alt arbeid skal foregå i .github/workflows mappen (dvs ikke lov å pirke i reactprosjektet)
- Vinnerene er gruppen med raskest tid på leaderboardet.
