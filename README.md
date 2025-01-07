**Beatrice Devivo**  
**N.° Matricola: 972**  
**Progettazione Web 2023/2024**  

### **Sito: Agriturismo La Fucina**
Il progetto realizzato consiste nella creazione di un sito web per l’Agriturismo La Fucina, una realtà che combina l'accoglienza in formula B&B, la ristorazione con cucina tipica locale e la produzione di prodotti biologici a chilometro zero. Questo progetto mira a offrire agli utenti un'esperienza intuitiva e piacevole, con sezioni facilmente accessibili per esplorare i servizi, scoprire i prodotti e contattare l'azienda.

Il sito è progettato per essere completamente responsive, adattandosi a diverse dimensioni di schermo per garantire la migliore esperienza possibile su desktop, tablet e dispositivi mobili.

**Link al sito**: 

---

### **Strumenti Utilizzati**

- **Visual Studio Code**: Utilizzato come ambiente di sviluppo per scrivere e gestire i file HTML, CSS e JavaScript. Offre integrazioni con strumenti per il debug e l'ottimizzazione del codice.
- **GitHub**: Repository per il controllo delle versioni e la condivisione del codice. Ha consentito di mantenere una cronologia chiara delle modifiche.
- **Netlify**: Piattaforma per l’hosting del sito. Garantisce un'implementazione rapida e una gestione automatica del deployment continuo.
- **CodePen**: Usato per sperimentare snippet di codice e testare rapidamente soluzioni di stile e interattività.

---

### **Test di Verifica e Controllo Qualità**

1. **Google Lighthouse**: Utilizzato per misurare le prestazioni complessive, l'accessibilità, la compatibilità SEO e le best practice del sito.
2. **W3C Validator**: Per validare il codice HTML e CSS e assicurare che segua gli standard web.
3. **Responsinator**: Testato per verificare la responsività su vari dispositivi mobili e schermi di diverse dimensioni.
4. **WebPageTest**: Per ottenere un'analisi dettagliata dei tempi di caricamento delle pagine e ottimizzazioni.

---

### **Descrizione e Struttura del Sito**

La homepage accoglie i visitatori con un’introduzione sull’agriturismo, seguita da una sezione che mette in risalto i prodotti BIO disponibili nello shop online. Una mappa interattiva mostra la posizione esatta dell'azienda, facilitando la pianificazione delle visite.

La navigazione è ottimizzata con:
- **Menu orizzontale** per la visualizzazione desktop.
- **Menu burger** per dispositivi mobili, che garantisce accessibilità senza compromettere l’estetica.

Altre sezioni includono:
- **Chi siamo**: Una presentazione della storia e della filosofia dell’agriturismo.
- **Shop**: Prodotti biologici, ognuno con immagine, descrizione, prezzo e pulsante per l’acquisto.
- **Contatti**: Modulo per richieste personalizzate e link diretto alla pagina Instagram.

---

### **Organizzazione del CSS**

Il foglio di stile è suddiviso in sezioni logiche per facilitare la manutenibilità:

- **Stili Generali**: Definiscono le proprietà di base di `html` e `body`, come il comportamento dello scorrimento e la tipografia generale.
  - Queste regole sono presenti all'inizio del file, dove vengono specificati il `scroll-behavior: smooth` e il `font-family` predefinito.

- **Tipografia**: Regole per titoli, sottotitoli e paragrafi.
  - Classi come `.titolo`, `.titolipiccoli`, e `.text` definiscono le dimensioni, gli allineamenti e i colori del testo.

- **Header**: Include la gestione del menu orizzontale e del menu burger.
  - Le classi `.navigazione` e `.burger-menu` definiscono il layout e gli stili dei menu.

- **Prima Parte del Sito (Hero)**: Contenitore con immagine di sfondo e testi sovrapposti.
  - La classe `.sfondo-chisiamo` gestisce l'immagine con `background-attachment: fixed` per l'effetto parallax.

- **Sezioni dei Contenuti**: Classi flexbox per layout responsive.
  - `.section` e `.content-box` utilizzano `display: flex` e `gap` per organizzare immagini e testi.

- **Elementi Interattivi**: Stili per popup dei cookie e finestra laterale del carrello.
  - `.cookie-popup` e `.carrello-side` definiscono il posizionamento fisso e gli effetti di transizione.

- **Stili Responsivi**: Utilizza media query per adattare il layout.
  - Le regole per schermi piccoli e grandi sono gestite con `@media screen and (max-width: 768px)` e `min-width: 769px`.

Questa suddivisione consente di separare le preoccupazioni, rendendo il codice più chiaro e modulare.

