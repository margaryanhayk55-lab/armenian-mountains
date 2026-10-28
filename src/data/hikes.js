export const levels = ['Բոլորը', 'Հեշտ', 'Միջին', 'Դժվար'];
import aragats from '../images/aragats.jpg';
// Фото с Wikimedia Commons. Название файла пишется через _ вместо пробелов.
const commons = (file, width = 1600) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${file}?width=${width}`;

export const hikes = [
  {
    id: 1,
    slug: 'kari-lake',
    gallery: [
      commons('Kari_Lake.jpg'),
      commons('Jezero_Kari.jpg'),
      commons('Aragats_mountain.jpg'),
    ],
    description: [
      'Երթուղին սկսվում է Քարի լճի շրջակայքից և հնարավորություն է տալիս վայելել Արագածի լեռնային բնությունը։',
      'Ճանապարհին բացվում են լճի, քարքարոտ լանջերի և լայն լեռնային հորիզոնների տեսարաններ։ Եղանակը կարող է արագ փոխվել, ուստի անհրաժեշտ է տաք հագուստ։'
    ],
    facts: [
      'Քարի լիճը գտնվում է ծովի մակարդակից մոտ 3,200 մ բարձրության վրա։',
      'Բարձրադիր վայրերում նույնիսկ ամռանը կարող է ցուրտ և քամոտ լինել։',
      'Մեկնելուց առաջ ստուգիր եղանակը և երթուղու հասանելիությունը.'
    ],
    title: 'Քարի լիճ՝ Արագածի լանջին',
    region: 'Արագածոտնի մարզ',
    level: 'Միջին',
    duration: '1 օր',
    distance: '12 կմ',
    season: 'Հունիս–Սեպտեմբեր',
    spots: 8,
    price: '12 000 ֏',
    mountain: 'aragats',
    image: commons('Kari_Lake.jpg', 800),
  },
  {
    id: 2,
    slug: 'aragats-four-peaks',
    gallery: [
     aragats,
    ],
    description: [
      'Արագածի չորս գագաթների երթուղին նախատեսված է լավ պատրաստված և փորձառու արշավականների համար։',
      'Բարձրությունը, երկար ճանապարհը և եղանակի փոփոխությունները պահանջում են ճիշտ պլանավորում, բավարար ջուր, համապատասխան հանդերձանք և փորձառու ուղեկցորդ։'
    ],
    facts: [
      'Արագածն ունի չորս հիմնական գագաթ։',
      'Հյուսիսային գագաթը Հայաստանի ամենաբարձր կետն է՝ 4,090 մ։',
      'Երթուղին խորհուրդ է տրվում անցնել փորձառու ուղեկցորդի հետ։'
    ],
    title: 'Արագածի չորս գագաթները',
    region: 'Արագածոտնի մարզ',
    level: 'Դժվար',
    duration: '2 օր',
    distance: '28 կմ',
    season: 'Հուլիս–Օգոստոս',
    spots: 6,
    price: '45 000 ֏',
    mountain: 'aragats',
    image: aragats,
  },
  {
    id: 3,
    slug: 'khustup-summit',
    // TODO: заменить на реальные фото Хуступа (пока оставлены прежние Unsplash)
    gallery: [
      'https://armenian-tour.ru/wp-content/uploads/2026/06/mount-khustup-above-kapan-syunik-armeni.webp',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwVyksKCucOQutnZESNXIwezvZQDgyrNWD3D9pvZycUc8MfhrpBnKU6YQ&s=10',
      'https://travel-armenia.org/wp-content/uploads/2025/01/khustup-4.jpg.webp'
    ],
    description: [
      'Խուստուփի վերելքը տանում է դեպի Սյունիքի ամենատպավորիչ լեռնային բնապատկերներից մեկը։',
      'Երթուղին պահանջում է լավ ֆիզիկական պատրաստվածություն և եղանակային պայմանների նախնական ստուգում։ Լավագույն փորձի համար մեկնի՛ր տեղական ուղեկցորդի հետ։'
    ],
    facts: [
      'Խուստուփը գտնվում է Կապանի շրջակայքում։',
      'Լեռը կապված է Գարեգին Նժդեհի հիշատակի հետ։',
      'Վերելքի պայմանները կախված են եղանակից և ընտրված արահետից։'
    ],
    title: 'Խուստուփի գագաթ',
    region: 'Սյունիքի մարզ',
    level: 'Միջին',
    duration: '1 օր',
    distance: '14 կմ',
    season: 'Հունիս–Սեպտեմբեր',
    spots: 10,
    price: '18 000 ֏',
    mountain: 'khustup',
    image: 'https://armenian-tour.ru/wp-content/uploads/2026/06/mount-khustup-above-kapan-syunik-armeni.webp',
  },
  {
    id: 4,
    slug: 'kaputjugh',
    // TODO: заменить на реальные фото Капуджуха (пока оставлены прежние Unsplash)
    gallery: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3hoOUpEfvnbFCpLoHvFyRPVYzbjJcl3fQIeqMcTZA_aH0lWpO4WcG8h2g&s=10',
      'https://armland.am/wp-content/uploads/2025/02/dsc_0063-1-1-1.webp',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGyx4rTiT8YB6kygpJEBmpb2DgwEN38bx7bCBb5GW5vzH1UN4aiUlcLxw&s=10'
    ],
    description: [
      'Կապուտջուղի բազմօրյա արշավը բացահայտում է Սյունիքի վայրի և քիչ մարդաշատ լեռնային բնությունը։',
      'Երթուղին բարդ է, ուստի անհրաժեշտ են փորձ, լավ հանդերձանք, սննդի և ջրի պաշար, ինչպես նաև երթուղու մանրակրկիտ պլանավորում։'
    ],
    facts: [
      'Կապուտջուղը Զանգեզուրի լեռնաշղթայի ամենաբարձր գագաթն է։',
      'Բարձրադիր հատվածներում եղանակը կարող է արագ փոխվել։',
      'Խորհուրդ է տրվում մեկնել փորձառու ուղեկցորդի հետ։'
    ],
    title: 'Կապուտջուղ՝ Զանգեզուրի գագաթ',
    region: 'Սյունիքի մարզ',
    level: 'Դժվար',
    duration: '3 օր',
    distance: '35 կմ',
    season: 'Հուլիս–Սեպտեմբեր',
    spots: 5,
    price: '70 000 ֏',
    mountain: 'kaputjugh',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3hoOUpEfvnbFCpLoHvFyRPVYzbjJcl3fQIeqMcTZA_aH0lWpO4WcG8h2g&s=10',
  },
  {
    id: 5,
    slug: 'tatev-vorotan',
    gallery: [
      commons('Monasterio_de_Tatev,_Armenia,_2016-10-01,_DD_83-85_HDR.jpg'),
      commons('Tatev_Monastery,_Liturgy,_Armenian_Orthodox_Christian_Church,_Tatev,_Armenia.jpg'),
      commons('Tatev_Monastery,_Liturgy,_Rite,_Tatev,_Christianity_in_Armenia.jpg'),
    ],
    description: [
      'Տաթևի և Որոտանի կիրճի երթուղին համադրում է բնությունը, պատմությունը և Հայաստանի հարավի յուրահատուկ տեսարանները։',
      'Արահետը հարմար է նրանց համար, ովքեր ցանկանում են հանգիստ տեմպով ուսումնասիրել շրջանը և վայելել կիրճի բնապատկերները։'
    ],
    facts: [
      'Տաթևի վանքը Հայաստանի հարավի հայտնի պատմական համալիրներից է։',
      'Որոտանի կիրճը հայտնի է իր խորությամբ և ժայռոտ լանջերով։',
      'Ճանապարհից առաջ ճշտիր արահետի և տրանսպորտի հասանելիությունը։'
    ],
    title: 'Տաթև՝ Որոտանի կիրճ',
    region: 'Սյունիքի մարզ',
    level: 'Հեշտ',
    duration: '1 օր',
    distance: '8 կմ',
    season: 'Մայիս–Հոկտեմբեր',
    spots: 12,
    price: '10 000 ֏',
    mountain: null,
    image: commons('Monasterio_de_Tatev,_Armenia,_2016-10-01,_DD_83-85_HDR.jpg', 800),
  },
  {
    id: 6,
    slug: 'garni-geghard',
    gallery: [
      commons('Garni_Gorge2.jpg'),
      commons('Geghard_Monastery,_Christianity_in_Armenia.jpg'),
      commons('Garni_Gorge3.jpg'),
    ],
    description: [
      'Գառնի–Գեղարդ երթուղին համադրում է մշակութային ժառանգությունն ու բնության մեջ քայլելու հաճույքը։',
      'Ճանապարհին կարելի է բացահայտել Գառնիի տաճարը, Ազատի կիրճի բնապատկերները և Գեղարդի վանական համալիրը։'
    ],
    facts: [
      'Գառնիի տաճարը Հայաստանի հայտնի հեթանոսական հուշարձաններից է։',
      'Գեղարդի վանքի մի մասը փորագրված է ժայռի մեջ։',
      'Գառնիից Գեղարդ կարելի է այցելել նույն օրվա ընթացքում։'
    ],
    title: 'Գառնի–Գեղարդ արահետ',
    region: 'Կոտայքի մարզ',
    level: 'Հեշտ',
    duration: '1 օր',
    distance: '9 կմ',
    season: 'Ապրիլ–Հոկտեմբեր',
    spots: 15,
    price: '8 000 ֏',
    mountain: null,
    image: commons('Garni_Gorge2.jpg', 800),
  },
];