import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game } from "../../App";

type CarrinhoState = {
  itens: Game[],
}

const initialState: CarrinhoState = {
  itens: []
}
const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: { // mudança de estados
    adicionar: (state, action: PayloadAction<Game>) => {
      const jogo = action.payload;
      if(state.itens.find(game => game.id === jogo.id)){
        alert('item já adicionado')
      }else {
        state.itens.push(jogo)
      }
    }
  }
})

export const {adicionar} = carrinhoSlice.actions
export default carrinhoSlice.reducer
