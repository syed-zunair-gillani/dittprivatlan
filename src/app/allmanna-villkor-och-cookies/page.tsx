import PageBanner from '@/components/main/pageBanner'
import React from 'react'

const ConditionAndCookies = () => {
  return (
    <>
     <PageBanner title="allmanna villkor och cookies"/>
     <section className='my-20 container content mx-auto px-3'>
          <h2>Vilka personuppgifter vi samlar in och varför vi samlar in dem</h2>
          <h3><strong>GDPR</strong></h3>
          <p>Dittprivatlan.se samlar i sig inte in användardata, dock används produkter från exempelvis Google Analytics som i sin tur samlar in data för att kunna ge oss statistik och beteendeflöden. Denna statistik låter oss optimera vår webbplats för att ge er besökare en ännu bättre upplevelse.</p>
          <h3><strong>Cookies</strong></h3>
          <p>En cookie är en liten textfil som lagras på din dator. Cookies används normalt för att förbättra webbplatsen för användaren, till exempel för att kunna anpassa en webbplats efter besökarens önskemål och val. En permanent cookie ligger kvar på besökarens dator under en bestämd tid. En sessionscookie lagras tillfälligt i datorns minne under tiden en besökare är inne på en webbsida. Sessionscookies försvinner när du stänger din webbläsare.</p>
          <p className='mt-4'>Du kan själv förhindra att cookies lagras på din dator genom att välja vissa inställningar i din webbläsare. Här kan du läsa om hur du gör på Kommunikationsmyndighetens webbplats.</p>
          <h3><strong>Kommentarer</strong></h3>
          <p>Vi använder oss av facebooks plugin för kommentarer och det är villkoren för Facebook som gäller. </p>
          <h3><strong>Analysverktyg för webbstatistik</strong></h3>
          <h5><strong>Google Analytics</strong></h5>
          <p className='mt-2'>Dittprivatlan.se använder Google Analytics som ett hjälpmedel för att få en bild av hur besökare använder webbplatsen. Analysverktyget använder cookies och informationen som genereras av dessa genom din användning av webbplatsen (inklusive din IP-adress) kommer att vidarebefordras till- och lagras av Google på servrar i USA.</p>
          <p className='mt-4'>Denna information används enbart i vårt syfte att presentera besöksstatistik och t ex statistik över det mest lästa innehållet, samt förbättra innehåll som inte är lika populärt.</p>
          <p className='mt-4'>Google Analytics är ett viktigt verktyg för oss så att vi kan utveckla och förbättra innehållet för dig som besökare, samt förbättra navigering och struktur på sajten. Google kommer inte att koppla samman IP-adresser med andra data som Google innehar.</p>
          <h5 className='my-3'><strong>Hotjar</strong></h5>
          <p>Vi använder oss av en av marknadens mest kraftfulla verktyg när det kommer till att analysera användarbeteenden. Detta ger oss information kring hur besökare använder vår webbplats visuellt och låter oss förbättra webbplatsen live medan du besöker en sida. </p>
          <h3>Vilka rättigheter du har över dina data</h3>
          <p>Om du har ett konto eller har skrivit några kommentarer på denna webbplats kan du begära en exportfil med de personuppgifter vi har om dig, inklusive alla uppgifter du har gett oss. Du kan också begära att vi tar bort alla personuppgifter vi har om dig. Detta omfattar inte eventuella uppgifter som vi är tvungna att spara av administrativa, legala eller säkerhetsändamål.</p>
          <h3>Allmäna villkor</h3>
          <ul>
               <li>Dittprivatlan.se ger information om svenska långivare inom segmenten snabblån, smslån och kontokrediter (konsumentkrediter) samt blancolån och samlingslån/hopbakslån presenteras.</li>
               <li>Dittprivatlan.se har ingen inverkan, varken vill eller kan påverka långivarnas beslut angående din eventuella ansökan, utan hjälper dig endast att hitta ett lån som passar för dina förutsättningar.</li>
               <li>Dittprivatlan.se kontrollerar alltid informationen och gör vårt yttersta för att presentera korrekt information och hålla information uppdaterad, vi reserverar oss dock för eventuella felaktigheter eller fördröjningar i uppdateringen av information. Kontrollera alltid informationen på långivarens hemsida i samband med din ansökan, för att garantera att du uppfattat informationen på rätt sätt.</li>
               <li>Dittprivatlan.se får provision från vissa av långivarna på denna webbplats. För att få en heltäckande webbplats, så inkluderar vi även långivare som vi inte får någon provision av. Detta är viktigt för att du som ev låntagare ska få ett så bra utbud som möjligt. De långivare som vi har provision från har vi ett samarbete med, bland annat genom affiliatenätverken:</li>
          </ul>
          <p>Adtraction, AdService och Adrecord det kostar inte dig som låntagare något extra.</p>
          <h3>Klagomål och kontakt</h3>
          <p>Har du några klagomål kring innehållet på denna sida eller vill komma i kontakt med oss av annan anledning, så är du alltid välkommen att kontakta oss</p>
     </section>
    </>
  )
}

export default ConditionAndCookies