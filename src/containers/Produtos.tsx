import { Game } from '../App'
import Produto from '../components/Produto'
import { useGetJogosQuery } from '../services/api'

import * as S from './styles'

const Produtos = () => {
  const {data: jogos, isLoading} = useGetJogosQuery()
  console.log('Dados recebidos da API:', jogos) 
  if(isLoading) return <h2>carregando</h2>
  return (
    <>
      <S.Produtos>
        {jogos?.map((game) => (
          <Produto key={game.id} game={game} />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos
