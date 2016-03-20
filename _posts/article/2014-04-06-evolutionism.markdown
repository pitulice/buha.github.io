---
layout: post
title: "Evoluționismul argumentat creștinului sceptic la știință"
modified:
categories: article
excerpt: "Trecere în revistă a două premise fundamentale evoluționismului (vârsta de ordinul miliardelor de ani a Universului și spontaneitatea mutațiilor) și prezentarea a trei argumente pentru evoluționism" 
tags: ["evoluționism", "darwin", "biblia", "fosile", "vârsta pământului", "atheism", "ateism", "christian", "young earth", "creationism"]
comments: true
image:
  feature: banner-evolutionism.jpg
  thumb: 
date: 2014-04-06
---

{% include _toc.html %}

Prin acest articol doresc să argumentez de ce cred și susțin Teoria Evoluției a lui Darwin, creștinului sceptic la știință. Singura condiție pentru creștinul cititor e să fie dispus să urmărească niște argumente, inclusiv matematice, lăsându-și pentru câteva minute prejudecățile la o parte. Voi începe cu 2 premise cât se poate de elementare omului educat al epocii în care trăim dar care e posibil să nu fie evidente pentru creștinul cititor așa că vor fi și argumentate. Urmează apoi argumentația compusă din 2 argumente simple, care se bazează pe premisele deja expuse, pentru a demonstra că selecția naturală este procesul prin care omul și celelalte viețuitoare au evoluat la stadiul de acum.

# Premise și noțiuni fundamentale

## Premisa 1: Vârsta Terrei e de ordinul miliardelor și nu a miilor de ani

Creștinul tipic cu care am personal de-a face se încăpățânează să afirme că Pământul are 6000 de ani vechime și că a fost creat miraculos de Dumenzeu într-o zi deși există un consens în lumea științifică de mai bine de 100 de ani că vârsta Pământului e de ordinul miliardelor de ani. E totuși o chestiune de rațiune și nu de credință, din moment ce e un fenomen măsurabil și supus unor legi fizice. Sfântul Augustin în *De Genesi ad litteram libri duodecim*, în contextul în care discută despre Pământ, mișcările astrelor, pozițiile relative și mișcările lor, ciclurile anotimpurilor, eclipsele lunii și alte lucruri de natură științifică se adresează creștinilor care vorbesc fără să le cunoască:

>Este o dizgrație și este periculos pentru un necredincios să audă un creștin explicând înțelesurile Scripturii și în același timp vorbind non-sensuri despre aceste lucruri. 

Pentru a parcurge subiectul vârstei Pământului, cititorul trebuie să stăpânească rezonabil matematica de liceu și să ia notă de faptul că **materia radioactivă se dezintegrează în timp**. S-a observat că nucleul anumitor atomi instabili pierde energie, eliberând-o la intervale de timp aleatoare sub formă de particule (alpha), particule (beta), raze (gamma), protoni, neutroni ș.a.m.d. Deși la nivel de atom, emisiile sunt aleatoare, cu alte cuvinte impredictibile, șansa producerii lor este constantă în timp și e specifică fiecărui material în parte. În urma pierderii de energie, atomul părinte se poate dezintegra fie într-un atom copil cu un nucleu într-o stare diferită, fie într-un alt atom. Trei dezintegrări des utilizate ca exemplu:

$$^{238}_{92}U \rightarrow \, ^{234}_{90}Th + ^{4}_{2}He \rightarrow ...$$

$$^{87}_{37}Rb \rightarrow \, ^{87}_{38}Sr + ^{0}_{-1}\beta$$

$$^{14}_{6}C \rightarrow \, ^{14}_{7}N + ^{0}_{-1} \beta$$

Rata dezintegrării unui „bolovan” de materie părinte este proporțională cu numărul de particule de materie părinte în orice moment. Cu alte cuvinte, cu cât mai mare e „bolovanul”, cu atât mai mulți atomi se vor dezintegra în unitatea de timp. **Matematic** asta se scrie astfel:

$$\frac{dN}{dt}\propto{N}$$

De notat este că \\(\frac{dN}{dt}\\) este negativ pentru că numărul atomilor de materie părinte scade. Astfel ajungem la ecuația:

$$\frac{dN}{dt}=-\lambda{N}$$

unde \\(\lambda\\) este probabilitatea ca un atom de materie părinte să se dezintegreze în unitatea de timp. Repoziționând și integrând obținem:

$$\int_{N_0}^N{\frac{dN}{N}}=-\lambda\int_{t_0}^t{t}$$

care are ca și rezultat:

$$\ln(\frac{N}{N_0})=-\lambda(t-t_0)$$

Înlocuind \\(t_0=0\\) pentru începutul timpului și ridicând \\(e\\) la puterea membrului stâng și drept obținem:

$$N=N_{0}e^{-\lambda{t}}$$

care este **legea exponențială a dezintegrării radioactive**.  

Se definește mai departe \\(\tau_{1/2}\\) care este timpul de înjumătățire sau timpul necesar ca jumătate din materia părinte inițială să se transforme în materie copil. Dacă bolovanul de materie radioactivă are inițial 1kg și timpul lui de înjumătățire este de 1 an, după 1 an vor rămâne 500g de materie părinte radioactivă (restul de 500g fiind materie copil), după 2 ani vor rămâne 250g de materie părinte radioactivă (restul de 750g fiind materie copil) etc.

$$\frac{N_0}{2}=N_{0}e^{-\lambda{t}}$$

După simplificare și rearanjare, rezultă timpul de înjumătățire:

$$\tau_{1/2}=\frac{\ln(2)}{\lambda}$$

Timpul de înjumătățire se poate calcula (vezi ÎF1, mai jos) și astfel se obține constanta \\(\lambda\\), specifică materialului.

Fie \\(N_p\\) numărul de atomi de materie radioactivă părinte la timpul \\(t\\), \\(N_p^0\\) la timpul \\(t_0\\) iar \\(N_c\\) numărul de atomi de materie stabilă (copil). Prin definiție:

$$N_p^0=N_c+N_p$$

Înlocuind în legea exponențială a dezintegrării se obține:

$$N_c={N_p}(e^{\lambda{t}}-1)$$

Se pot măsura \\(N_c\\) și \\(N_p\\) și astfel se poate afla \\(t\\) pe care l-am definit ca și timpul scurs de la \\(t_0=0\\), adică vârsta pe care o căutăm. Există totuși o problemă și anume că în configurația inițială e posibil să fi existat deja materie copil, deci ecuația corectă este următoarea:

$$N_c-N_c^0={N_p}(e^{\lambda{t}}-1)$$

Matematic, ecuația are două necunoscute: \\(N_c^0\\) și \\(t\\). Există totuși o soluție foarte elegantă în cazul dezintegrării \\(Rb-Sr\\). Înlocuind simbolurile chimice în ecuație obținem:

$$^{87}{Sr}=^{87}{Sr_0}+^{87}{Rb}(e^{\lambda{t}}-1)$$

Din punct de vedere practic e rezonabil să se măsoare abundența relativă a izotopilor în loc să se măsoare abundența lor absolută. Cu alte cuvinte, se face o spectroscopie și se găsește compoziția relativă a unui material în loc să se numere atom cu atom. Artificiul constă în măsurarea abundenței relative la \\(^{86}{Sr}\\) care este un izotop stabil care nu se dezintegrează  și care nu este generat de nicio dezintegrare. Se poate considera atunci că de-a lungul timpului, cantitatea de \\(^{86}{Sr}\\) a rămas constantă în roca ce se măsoară. Matematic, artificiul e divizarea membrilor la cantitatea de acest izotop stabil:

$$\frac{^{87}{Sr}}{^{86}{Sr}}=\frac{^{87}{Sr_0}}{^{86}{Sr}}+\frac{^{87}{Rb}}{^{86}{Sr}}(e^{\lambda{t}}-1)$$

Ecuația de mai sus are următoarea formă:

$$y=y_0+xm$$

\\(y\\) și \\(x\\) se pot măsura, cum spuneam, prin spectrografie dar tot nu cunoaștem \\(y_0\\)! Pentru cine a urmărit până în acest punct acum urmează momentul de Evrika!: nu e nevoie să cunoaștem \\(y_0\\)! Modul în care se procedează în cazul Rb-Sr este că se prelevă câteva probe din rocă cu diferite concentrații pentru \\(y\\) și \\(x\\) și datele sunt reprezentate pe o diagramă izocronă. Când o rocă este formată, prin răcirea magmei spre exemplu, raportul \\(\frac{^{87}{Sr}}{^{86}{Sr}}\\) e constant în toate rocile astfel că reprezentarea este linia orizontală \\(a-b-c\\). Cum \\(Rb\\) se dezintegrează în \\(Sr\\), concentrațiile relative se vor alinia după o dreaptă ca și \\(a'-b'-c'\\) care va avea o pantă diferită pentru fiecare moment \\(t\\) în care se face măsurătoarea. Ca rezultat al măsurătorii celor cel puțin 3-4 probe obținem panta. Odată ce știm panta putem afla timpul din ecuația:

$$m=e^{\lambda{t}}-1$$

și ca și curiozitate, putem afla și raportul inițial \\(y_0\\) care este punctul de intersecție al liniei izocrone cu ordonata.

{% include image.html url="/images/evolutionism/isocron.jpg" description="Diagrama izocronă a sistemului Rb-Sr (sursa Faure, G. 1977. Principles of isotope geology)" width="400px" position="center" %}

Exemplu concret: meteoritul Juvinas, datat la 4,6 ± 0,07 miliarde de ani.

{% include image.html url="/images/evolutionism/juvinas.jpg" description="Datarea meteoritului Juvinas (sursa Faure, G. 1977. Principles of isotope geology)" width="400px" position="center" %}

Există și alte metode de datare, unele deja menționate. Ce e de reținut e că zerourile nu sunt adăugate accidental și când se vorbește de o vârstă de miliarde de ani a Pământului e așa pentru că măsurătorile celor mai vechi roci descoperite pe Terra asta spun iar măsurătorile rocilor de pe lună o confirmă, la fel cum și măsurătorile meteoriților (căzuți pe Pământ) o confirmă.

## Premisa 2: Există mutații spontane la nivel biologic și acestea sunt aleatoare

{% include image.html url="/images/evolutionism/adn.jpg" description="ADN-ul are formă de helix și e format din perechi de nucleotide" width="175px" position="right" %}

Mutațiile se produc la nivelul ADN-ului care este materialul ereditar elementar al vieții sau informația ce se transmite de la părinți la odraslă. Informația purtată de ADN este codată pe 4 "litere" care de fapt sunt 4 substanțe organice numite nucleotide și anume: \\(A\\) - adenină, \\(C\\) - citozină, \\(G\\) - guanină și \\(T\\) - timină. Aceste baze se pot cupla între ele formând numai perechile \\((A + T)\\), \\((T + A)\\), \\((C + G)\\) sau \\((G + C)\\).  ADN-ul este deci un șir lung de astfel de perechi care are forma unui helix dublu ca în imaginea alăturată. Nucleotidele sunt prinse între ele prin legături de Hidrogen astfel încât \\(A\\) și \\(T\\) se leagă prin 2 legături de Hidrogen iar \\(C\\) și \\(G\\) prin 3. Pe scurt, duplicarea ADN-ului se face prin desfacerea legăturilor de hidrogen prin acțiunea unor proteine. Cele două așa-numite catene rezultante sunt copiate de o moleculă denumită ADN-polimerază. În acest punct pot interveni mutațiile și totodată cititorul poate răsufla ușurat că autorul nu intră mai adânc în detalii. Mutațiile pot avea mai multe cauze, printre care radiațiile cosmice sau diferite substanțe chimice numite agenți mutageni. Copierea greșită a ADN-ului poate fi prin **ștergerea**, **adăugarea** sau **substituirea** unor baze ceea ce lasă naturii o paletă largă de posibilități de schimbare.

{% include image.html url="/images/evolutionism/hematii.jpg" description="Hematii afectate (stânga), hematii normale (dreapta)" width="175px" position="right" %}

În primul rând putem avea de-a face cu mutații **dăunătoare**. Exemplu aleator - anemia falciformă, maladie ereditară autozomal recesivă. Pe românește este de fapt o mutație ce produce hematii cu formă de seceră în loc de forma normală de disc biconcav. Mutația este de fapt o schimbare a unei singure nucleotide \\(A\\) în \\(T\\) la o poziție anume. Din cauza formei hematiilor rezultante, capilarele se pot bloca ducând la complicații. Speranța de viață a persoanelor afectate este mai mică.

În al doilea rând putem avea de-a face cu mutații **neutre** definite ca mutații care nu deteriorează capacitatea individului de a supraviețui și a se reproduce. Mutațiile neutre par a fi demonstrabil cele mai numeroase[^2]. Un scurt exemplu este cel al lizinei, proteină ce poate fi obținută din perechile de secvențe: \\((TTC + AAG)\\) sau \\((TTT + AAA)\\). Dacă inițial la nivelul ADN-ul organismului ce suferă mutația a fost \\(TTC\\) și în urma mutației s-a obținut \\(TTT\\) iar la nivel de  ARN mitocondrial a fost \\(AAG\\) și în urma mutației s-a obținut \\(AAA\\), la nivel de proteină se obține aceeași lizină.

În al treilea și ultimul rând putem avea de-a face cu mutații **binefăcătoare mutantului în nișa ecologică în care se află**. Un exemplu în acest sens este cel al salamandrelor *Ensatina eschscholtzii* care se găsesc pe coasta de vest a continentului Nord-American.
{% include image.html url="/images/evolutionism/salamandre.gif" description="Dispunerea regională a salamandrelor pe coasta Californiei de Nord (evolution.berkeley.edu)" width="250px" position="left" %} 
Dacă ne-am plimba prin împrejurimi, am putea vedea două feluri de salamandre: unele de culoare pală pentru a se camufla bine, altele cu pete de culori vii care imită culorile prădătorilor locali. Ce s-a observat e că diferitele feluri de salamandre se pot încrucișa cu salamandre din apropiere, deci specii nu foarte diferite. În schimb, speciile din Sudul regiunii (eschscholtzi, klauberi, croceater) nu se pot încrucișa. Implicația logică e că salamandrele din Nord, extinzându-și teritoriul, au făcut-o pe cele două trasee posibile, ocolind un lanț muntos. Cu timpul, selecția naturală a selectat populația cea mai adaptată regiunii, astfel că în partea de Est, unde se găsesc prădători cu culori vii, salamandrele ce s-au născut cu culori vii au prosperat și au transmis mai departe gena. Pe când au ajuns în sud și s-au reîntâlnit, s-au transformat atât de mult încât avem de-a face cu specii diferite care nici măcar nu se mai pot încrucișa.

De reținut ca premisă e că **mutațiile există și sunt aleatoare**. Iar asta implică faptul că anumite mutații, oricât de rare ar fi, pot aduce beneficii mutantului în condițiile fixate de ecosistemul în care se află. 

# Argumentația

## Definiție informală: Selecția naturală

Evoluționismul se bazează pe cei doi piloni, premisa că *Vârsta Terrei e de ordinul miliardelor și nu a miilor de ani* și premisa că *Există mutații la nivel biologic și acestea sunt aleatoare*. Conceptual, evoluționismul poate fi definit doar din aceste două premise: **dat fiind faptul că într-un organism oricât de primitiv sau complex se pot produce mutații și dat fiind faptul că au existat miliarde de ani în care să se fi produs mutații, există o posibilitate ca mutații benefice succesive să producă modificări semnificative în organism, astfel încât să se obțină în final un organism cu funcții sau abilități noi**. 

Să ne imaginăm o insulă pe care putem găsi șopârle de culoare roșiatică ce mișună prin iarbă măruntă dar de culoare verde. Conform definiției de mai sus, în ecosistemul în care se află șopârla, un avantaj ar putea fi culoarea verde pentru a se camufla împotriva prădătorilor înaripați. De-a lungul timpului apar tot felul de modificări genetice în această specie de șopârle roșii, cele mai multe neoferind purtătorului vreun avantaj. Dar când mutația responsabilă pentru colorit verde se produce, descendenții primei șopârle verzi vor avea un foarte mare avantaj în fața șopârlelor roșii: camuflajul. Din acest moment șopârlele roșii vor scădea în număr pentru că vor fi cu precădere vânate de prădători iar cele verzi vor prospera.

## 1. Argument empiric: Organele și funcțiile viețuitoarelor fosilizate sunt tot mai complexe cu trecerea timpului

Din prima premisă aflăm că vârsta Pământului e de ordinul miliardelor de ani și nu a miilor și că metodele de datare sunt justificate și precise. Pentru că metoda este corectă, datarea fosilelor este de asemenea corectă, astfel că avem de-a face cu bacterii fosilizate vechi de 3,5 miliarde de ani, versiuni primitive de pești de acum 530 milioane de ani, primi amfibieni acum 370 de milioane de ani, prime reptile acum 310-320 milioane de ani, primi dinozauri acum 230 de milioane de ani, prime păsări undeva în Jurassic ș.a.m.d. Istoria vieții pe Terra e una tumultoasă, scrâjelită de extincții în masă. Avem în muzee numeroase fosile de specii ce au apărut în diferite perioade de timp ca să dispară mai apoi, fapt incompatibil cu o Creație statică unde toate viețuitoarele apar deodată și evential dispar. **Argumentul se bazează pe faptul că vârsta fosilelor obținută prin datarea straturilor în care au fost găsite este în armonie cu complexitatea mai mare a organelor și funcțiilor dezvoltate de viețuitoarele apărute mai târziu în timp**. Câteva exemple simplificate de astfel de organe și funcții dezvoltate:

- Vertebratele succed nevertebratele în timp. Prin faptul că vertebratele au structură osoasă internă și nu externă, pot să crească în talie și sunt mult mai mobile.
- Peștii cu maxilar succed în timp peștii fără maxilar. Peștii fără maxilar(câțiva încă există) se hrănesc cu nevertebrate mici sau alți pești morți dar hrănirea e ineficientă și lentă astfel că a avea maxilar este un avantaj.
- Primii amfibieni succed peștii în timp. Două mari avantaje ale amfibienilor sunt membrele utile deplasării pe uscat și sistemul respirator adaptat la a extrage oxigenul din aer.
- Primele reptile succed amfibienii în timp. Deși amfibienii au pășit pe uscat, nu puteau să se aventureze prea mult pentru că ouăle lor fără protecție nu pot supraviețui decât în apă. Reptilele însă au evoluat o coajă în jurul ouălor și astfel au cucerit uscatul.
- Mamiferele și dinozaurii succed reptilele în timp. Deși reptilele au cucerit uscatul, membrele lor laterale ineficiente mersului pe distanțe mari au condus la schimbarea ce o vedem la mamifere și la dinozauri și anume membre sub corp și nu în lateral.

## 2. Argument empiric: Moștenirea genetică inutilă

Noi înșine, adică oamenii, purtăm în noi vestigii ale strămoșilor noștri care nu ne mai folosesc la nimic: porțiuni de ADN inutil, apendicele, coccisul - care încă le servește maimuțelor drept loc de prindere al cozii, cea de-a treia pleoapă - care încă le servește păsărilor și reptilelor, mușchii erectori ai firelor de păr - care le folosesc animalelor cu păr pe tot corpul pentru a-și ridica părul cu scopul de a părea mai mari ș.a.m.d. Nervul laringeal, în om, e de 7 ori mai lung decât necesar pentru că înconjoară în mod inutil artera aortă ca mai apoi să se întoarcă până la laringe. Găsim în râuri subterane pești care au ochi ce nu le servesc la nimic. Fie că ne uităm la organele funcționale, fie la cele nefuncționale și inutile, vedem asemănări cât se poate de evidente cu animalele care ne înconjoară. **De ce am avea a 3-a pleoapă ca și reptilele dacă nu ne servește la nimic? De ce am avea mușchi pentru a ni se face „pielea găină” dacă sunt inutili? De ce șerpii și balenele au reminescențe ale unor membre? Există două răspunsuri posibile:**

- **Fie toate acestea sunt moștenite de la animale din alte vremuri ca vestigii pe care selecția naturală nu le-a îndepărtat.**
- **Fie un Zeu a creat totul în așa fel încât să ne facă să credem că e vorba de o evoluție.**

De notat este că argumentul nu se bazează pe imperfecțiunile din natură, ale căror „grad de perfecțiune” ar putea fi subiectiv evaluat. Argumentul din moștenirea genetică inutilă se bazează pe obiectivitatea existenței continuităților dintre specii, chiar și la nivel de organe și funcții inutile. 

# Întrebări frecvente ale creștinului sceptic la evoluție

## ÎF1: Cum se poate măsura \\(\tau_{1/2}\\) când acesta e de ordinul miliardelor de ani?

Soluția la problemă e tot una matematică, dar e puțin mai avansată și include serii Taylor. O trimitere rapidă către [un document care explică metoda](http://darius.berghe.net/images/evolutionism/halflife.pdf) mă scutește de efort și îmi permite să mențin nivelul matematicii din articol la nivel de liceu.

## ÎF2: Unde-s speciile de legătură?

Întrebarea e în general prost pusă deoarece creștinul sceptic se așteaptă ca toate formele de viață intermediare să fi rămas în viață ceea ce nu e cazul. Pentru a răspunde totuși la întrebare, fac trimitere la o [listă de schelete umane](https://en.wikipedia.org/wiki/List_of_human_evolution_fossils) relevante pentru evoluție. Pentru toate celelalte tipuri de fosile, e suficientă o vizită la un muzeu de istorie naturală.

## ÎF3: ...prin urmare, noi provenim din maimuță?

Nu. Sundem descendenții unui strămoș comun omului și maimuțelor. E o diferență.

## ÎF4: Dacă Evoluția există, de ce nu o vedem sub ochii noștri?

În 1971, 5 perechi adulte din specia Podarcis sicula (șopârle) au fost mutate de pe insula Pod Kopište (0.09 km2) pe insula Pod Mrčaru (0.03 km2), ambele aparținând Croației. Deși pe insula pe care au fost mutate exista deja o specie de șopârle (Podarcis melisellensis), aceasta este acum extinctă în zonă. Teste de ADN mitocondrial făcute în 2008 [^1] arată că șopârlele care populează acum insula sunt de fapt urmașii celor 5 perechi aduse inițial. Ce s-a schimbat din 1971 până în 2008? Relativ multe:

- Dacă în 1971 au fost în principal carnivore, acum sunt în principal erbivore din cauză că pe Pod Mrčaru se găsesc frunze din abundență
- Ca să poată face trecerea de la carnivore la erbivore a fost nevoie de o forță mai mare a mușcăturii și într-adevăr asta s-a observat.
- Forța mai mare a mușcăturii e cuplată la rândul ei cu o creștere a dimensiunilor capului.
- Probabil cel mai spectaculos, apariția unor valve cecale ce funcționează ca o cameră de fermentare a celulozei din plante care nu apare la specia originală de pe Pod Kopište.
- Viteză de deplasare mai mică, ca urmare a absenței prădătorilor tereștri.

# Lectură suplimentară:
1. G. Brent Dalrymple, The Age of the Earth, 1994
2. Charles Darwin, The Voyage of Beagle, 1839 
3. Charles Darwin, The Origin of Species, 1859
4. Biblia - recitită și reconsiderată având miliardele de ani și selecția naturală în minte

# Referințe
[^1]:Anthony Herrel, Katleen Huyghe, [...], and Duncan J. Irschick, Rapid large-scale evolutionary divergence in morphology and performance associated with exploitation of a different dietary resource, 2008
[^2]:Kimura M., Evolutionary Rate at the Molecular Level, Nature 217:624-6, 1968
