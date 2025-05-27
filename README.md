# Mobil interaktion och responsiva komponenter i React

Att bygga för mobil interaktion handlar om att skapa användargränssnitt som är intuitiva, snabba och anpassade för mindre skärmar. Det innebär inte bara att layouten ska fungera på mobil – utan också att navigering, tryckytor och animationer är optimerade för touch-användning.


# Geolocation, Orientation och Touch Events i Webbutveckling

I modern webbutveckling, särskilt för mobila enheter, finns det flera API:er och events som gör det möjligt att skapa interaktiva och kontextmedvetna upplevelser. Några centrala tekniker är **Geolocation API**, **Device Orientation API** och **Touch Events**.

[Läs mer om touchevents](https://w3c.github.io/touch-events/)

## 🔒 Viktigt att tänka på
Geolocation och orientation kräver ofta HTTPS och användartillstånd.

Touch events kan påverka scroll och zoom – använd e.preventDefault() med försiktighet.

Testa alltid på riktiga enheter, inte bara i webbläsarsimulatorer.

---

## 📍 Geolocation API

Geolocation används för att hämta användarens geografiska position med hjälp av GPS, Wi-Fi eller mobilnät.

### Exempel (JavaScript)

```js
navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log("Lat:", position.coords.latitude);
    console.log("Long:", position.coords.longitude);
  },
  (error) => {
    console.error("Geolocation error:", error.message);
  }
);
```

## Responsiva komponenter i React

I React kan man skapa responsiva komponenter genom att:

- Använda **CSS Media Queries** eller utility-ramverk som Tailwind CSS
- Lyssna på **window size** med `useEffect` och `useState` för att anpassa komponenters beteende
- Göra komponenter **återanvändbara och modulära**, t.ex. `<MobileMenu />` eller `<ResponsiveGrid />`


## Tips för mobil interaktion
Undvik hover-effekter – använd klick eller svep
Gör knappar tillräckligt stora (minst 48x48 px)
Tänk på tillgänglighet – tydliga kontraster och läsbarhet
Använd react-responsive, framer-motion, eller Tailwind för att enkelt hantera layoutförändringar

