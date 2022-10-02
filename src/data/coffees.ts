import expressoTradImg from '../assets/coffee/expresso-trad.png'
import expressoAmeImg from '../assets/coffee/expresso-ame.png'
import expressoCremImg from '../assets/coffee/expresso-crem.png'
import expressoGelImg from '../assets/coffee/expresso-gel.png'
import cafeLeiteImg from '../assets/coffee/cafe-leite.png'
import latteImg from '../assets/coffee/latte.png'
import capuccinoImg from '../assets/coffee/capuccino.png'
import macchiatoImg from '../assets/coffee/macchiato.png'
import mocaccinoImg from '../assets/coffee/mocaccino.png'
import chocolateQuenteImg from '../assets/coffee/chocolate-quente.png'
import cubanoImg from '../assets/coffee/cubano.png'
import havaianoImg from '../assets/coffee/havaiano.png'
import arabeImg from '../assets/coffee/arabe.png'
import irlandesImg from '../assets/coffee/irlandes.png'

interface CoffeeItem {
  imgSrc: string
  alt: string
  title: string
  description: string
  price: number
  badges: string[]
  quantity: number
}

export const coffees: CoffeeItem[] = [
  {
    imgSrc: expressoTradImg,
    alt: 'Foto de um café expresso tradicional visto de cima',
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 3.99,
    badges: ['Tradicional', 'Rápido'],
    quantity: 0,
  },
  {
    imgSrc: expressoAmeImg,
    alt: 'Foto de um café expresso americano visto de cima',
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 4.15,
    badges: ['Tradicional', 'Diluído'],
    quantity: 0,
  },
  {
    imgSrc: expressoCremImg,
    alt: 'Foto de um café expresso cremoso visto de cima',
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 7.5,
    badges: ['Tradicional', 'Cremoso'],
    quantity: 0,
  },
  {
    imgSrc: expressoGelImg,
    alt: 'Foto de um café expresso com cubos de gelo visto de cima',
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 5.9,
    badges: ['Tradicional', 'Gelado'],
    quantity: 0,
  },
  {
    imgSrc: cafeLeiteImg,
    alt: 'Foto de um café com leite visto de cima',
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    badges: ['Tradicional', 'com leite'],
    quantity: 0,
  },
  {
    imgSrc: latteImg,
    alt: 'Foto de um latte visto de cima',
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    badges: ['Tradicional', 'com leite'],
    quantity: 0,
  },
  {
    imgSrc: capuccinoImg,
    alt: 'Foto de um capuccino visto de cima',
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 11.9,
    badges: ['Tradicional', 'com leite'],
    quantity: 0,
  },
  {
    imgSrc: macchiatoImg,
    alt: 'Foto de um macchiato visto de cima',
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 10.9,
    badges: ['Tradicional', 'com leite'],
    quantity: 0,
  },
  {
    imgSrc: mocaccinoImg,
    alt: 'Foto de um mocaccino visto de cima',
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 12.9,
    badges: ['Tradicional', 'com leite'],
    quantity: 0,
  },
  {
    imgSrc: chocolateQuenteImg,
    alt: 'Foto de um chocolate quente visto de cima',
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.5,
    badges: ['Especial', 'com leite'],
    quantity: 0,
  },
  {
    imgSrc: cubanoImg,
    alt: 'Foto de um café cubano visto de cima',
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 14.99,
    badges: ['Especial', 'Alcoólico', 'Gelado'],
    quantity: 0,
  },
  {
    imgSrc: havaianoImg,
    alt: 'Foto de um café havaiano visto de cima',
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 14.99,
    badges: ['Especial'],
    quantity: 0,
  },
  {
    imgSrc: arabeImg,
    alt: 'Foto de um café árabe visto de cima',
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 10,
    badges: ['Especial'],
    quantity: 0,
  },

  {
    imgSrc: irlandesImg,
    alt: 'Foto de um café irlandês visto de cima',
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 17.5,
    badges: ['Especial', 'Alcoólico'],
    quantity: 0,
  },
]
