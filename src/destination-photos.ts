import type { Language } from './content';
export interface DestinationPhoto { src: string; alt: Record<Language, string>; credit?: string; source?: string; license?: string; licenseUrl?: string }
// Photographs verified against their source pages; attribution stays with each destination.
export const destinationPhotos: Record<string, DestinationPhoto[]> = {
  "Santo Stefano e la ceramica": [
    {
      "src": "/images/bnb/territorio/muro-ceramiche-belvedere.webp",
      "alt": {
        "it": "Piastrelle dipinte sul belvedere di Santo Stefano di Camastra",
        "en": "Painted ceramic tiles on the Santo Stefano di Camastra belvedere",
        "de": "Bemalte Keramikfliesen am Aussichtspunkt von Santo Stefano di Camastra"
      }
    }
  ],
  "Gole di Tiberio": [
    {
      "src": "/images/bnb/territorio/gole-di-tiberio.webp",
      "alt": {
        "it": "Pareti rocciose e acqua nelle Gole di Tiberio",
        "en": "Rock walls and water in the Tiberio Gorges",
        "de": "Felswände und Wasser in der Tiberio-Schlucht"
      },
      "credit": "Rosariovecchio89",
      "source": "https://commons.wikimedia.org/wiki/File:Centro_della_Gole_con_giochi_di_luce.jpg",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    }
  ],
  "Fiumara d’Arte": [
    {
      "src": "/images/bnb/territorio/piramide-38-parallelo.webp",
      "alt": {
        "it": "Piramide del 38° Parallelo di Mauro Staccioli sulla collina di Motta d’Affermo",
        "en": "Mauro Staccioli’s 38th Parallel Pyramid on the hill at Motta d’Affermo",
        "de": "Mauro Stacciolis Pyramide des 38. Breitengrads auf dem Hügel bei Motta d’Affermo"
      },
      "credit": "Gianfranco Molino",
      "source": "https://commons.wikimedia.org/wiki/File:Motta_d%27Affermo_-_Piramide_38%C2%BA_parallelo_-_2025-09-03_17-11-37_001.jpg",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    },
    {
      "src": "/images/bnb/territorio/lungomare-villa-margi.webp",
      "alt": {
        "it": "Finestra sul mare di Tano Festa a Villa Margi",
        "en": "Tano Festa’s Finestra sul mare at Villa Margi",
        "de": "Tano Festas Finestra sul mare in Villa Margi"
      },
      "credit": "Wikimedia Commons",
      "source": "https://commons.wikimedia.org/wiki/File:REITANO_1140-11-06-52-7577.jpg",
      "license": "Public domain",
      "licenseUrl": "https://commons.wikimedia.org/wiki/File:REITANO_1140-11-06-52-7577.jpg"
    }
  ],
  "Parco dei Nebrodi": [
    {
      "src": "/images/bnb/territorio/stagno-parco-dei-nebrodi.webp",
      "alt": {
        "it": "Stagno circondato dal bosco nel Parco dei Nebrodi",
        "en": "Woodland pond in the Nebrodi Park",
        "de": "Waldteich im Nebrodi-Park"
      },
      "credit": "Davide Mauro",
      "source": "https://commons.wikimedia.org/wiki/File:Stagno_Nebrodi.jpg",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/"
    }
  ],
  "Tusa e Halaesa Arconidea": [
    {
      "src": "/images/bnb/territorio/agora-halaesa-arconidea.webp",
      "alt": {
        "it": "Resti dell’agorà di Halaesa Arconidea nel paesaggio di Tusa",
        "en": "Remains of the Halaesa Arconidea agora in the Tusa landscape",
        "de": "Überreste der Agora von Halaesa Arconidea in der Landschaft von Tusa"
      },
      "credit": "Rjdeadly",
      "source": "https://commons.wikimedia.org/wiki/File:Agora_of_Halaesa.jpg",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    }
  ],
  "Le spiagge della costa": [
    {
      "src": "/images/bnb/territorio/finestra-sul-mare-villa-margi.webp",
      "alt": {
        "it": "Spiaggia e mare a Villa Margi con la Finestra sul mare sul lungomare",
        "en": "Beach and sea at Villa Margi with Finestra sul mare on the waterfront",
        "de": "Strand und Meer bei Villa Margi mit Finestra sul mare an der Uferpromenade"
      },
      "credit": "iloveagrigento.it",
      "source": "https://commons.wikimedia.org/wiki/File:Finestra_sul_mare_-_Villa_Margi,_ME.jpg",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0"
    }
  ]
};
