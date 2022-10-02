import { useContext } from 'react'

import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import { BannerItem } from './components/BannerItem'

import {
  HomeContainer,
  Banner,
  BannerLeft,
  BannerTitle,
  BannerDescription,
  BannerContent,
  CoffeeContainer,
  CoffeeItemsContainer,
} from './styles'
import coffeeImg from '../../assets/coffee-img.png'
import { CoffeeItem } from './components/CoffeeItem'

import { CoffeeContext } from '../../contexts/CoffeeContext'

export function Home() {
  const { coffeeItems } = useContext(CoffeeContext)

  return (
    <HomeContainer>
      <Banner>
        <BannerContent>
          <BannerLeft>
            <BannerTitle>
              Encontre o café perfeito para qualquer hora do dia
            </BannerTitle>
            <BannerDescription>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </BannerDescription>

            <div>
              <BannerItem
                icon={<ShoppingCart weight="fill" />}
                title="Compra simples e segura"
                variant="orange"
              />
              <BannerItem
                icon={<Package weight="fill" />}
                title="Embalagem mantém o café intacto"
                variant="gray"
              />
              <BannerItem
                icon={<Timer weight="fill" />}
                title="Entrega rápida e rastreada"
                variant="yellow"
              />
              <BannerItem
                icon={<Coffee weight="fill" />}
                title="O café chega fresquinho até você"
                variant="purple"
              />
            </div>
          </BannerLeft>

          <img
            src={coffeeImg}
            alt="Copo de café com vários grãos e pós ao fundo"
          />
        </BannerContent>
      </Banner>
      <CoffeeContainer style={{ marginTop: '35.475rem' }}>
        <h2>Nossos Cafés</h2>
        <CoffeeItemsContainer>
          {coffeeItems &&
            coffeeItems.map((coffeeItem) => (
              <CoffeeItem key={coffeeItem.id} item={coffeeItem} />
            ))}
        </CoffeeItemsContainer>
      </CoffeeContainer>
    </HomeContainer>
  )
}
