import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { NotFoundContainer } from './styles'

export function NotFound() {
  const navigate = useNavigate()

  function handleGoBackHome() {
    navigate('/')
  }
  return (
    <NotFoundContainer>
      <h1>404</h1>

      <div>
        <p>Não conseguimos encontrar essa página...</p>
        <p>
          Verifique se o endereço está correto ou volte para a página inicial
          clicando no botão abaixo.
        </p>
      </div>

      <Button type="button" onClick={handleGoBackHome}>
        Voltar para a página inicial
      </Button>
    </NotFoundContainer>
  )
}
