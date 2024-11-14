import { useState } from 'react'
import './App.css'
import Player from './components/Player'
import Tabuleiro from './components/Tabuleiro'
import GameOver from './components/GameOver'

function App() {
  
  const[tabuleiro, setTabuleiro] = useState([[null, null, null],[null, null, null],[null, null, null]]);
  const[jogadorAtual, setJogadorAtual] = useState('1');
  const[estadoJogo, setEstadoJogo] = useState('')
  const[jogadas, setJogadas] = useState(0);
  const playerClass = 'mt-auto mb-auto'
  const actualPlayer = 'mt-auto mb-auto border border-yellow-600'


  const onClickreset = () =>{
    setTabuleiro([[null, null, null],[null, null, null],[null, null, null]]);
    setJogadorAtual('1')
    setEstadoJogo('')
    setJogadas(0);
  }
  //lista que contem a lista da lista das posicoes que podem vencer o jogo
  const jogadasVencedoras = [
    [[0,0], [0,1], [0,2]],
    [[1,0], [1,1], [1,2]],
    [[2,0], [2,1], [2,2]],
    [[0,0], [1,0], [2,0]],
    [[0,1], [1,1], [2,1]],
    [[0,2], [1,2], [2,2]],
    [[0,0], [1,1], [2,2]],
    [[0,2], [1,1], [2,0]]
  ];

  

  const handleClick = (row, col) => {
    let novoTabuleiro = [...tabuleiro]
    if(novoTabuleiro[row][col] === null){
      if(jogadorAtual === '1'){
        
        novoTabuleiro[row][col] = 'x'
        setJogadas(jogadas+1)
        setTabuleiro(novoTabuleiro)
        setJogadorAtual('2')
        
      }
      else{
        
        novoTabuleiro[row][col] = 'o'
        setJogadas(jogadas+1)
        setTabuleiro(novoTabuleiro)
        setJogadorAtual('1')
      }
    }
    for (let pattern of jogadasVencedoras) {
      const [a, b, c] = pattern;
  
      
      if (
        tabuleiro[a[0]][a[1]] &&
        tabuleiro[a[0]][a[1]] === tabuleiro[b[0]][b[1]] &&
        tabuleiro[a[0]][a[1]] === tabuleiro[c[0]][c[1]]
      ) {
        setEstadoJogo(tabuleiro[a[0]][a[1]]); 
        break;
      }else if(jogadas + 1 === 9 && estadoJogo === ''){
        setEstadoJogo('Empate')
      }

    }

  }

  
  return (
    <>
      {estadoJogo === '' &&(
        <div className='size-full m-auto'>
          <div className='bg-gray-700 w-custom h-custom justify-center m-auto'>
            <div className='flex flex-row gap-20 m-auto justify-center uppercase h-16 text-xl font-bold p-6'>
              <Player nome={'Jogador 1'} simbolo={'x'} className={jogadorAtual === '1' ? actualPlayer : playerClass}/>
              <Player nome={'Jogador 2'} simbolo={'o'} className={jogadorAtual === '2' ? actualPlayer : playerClass}/>
            </div>
            <div className='justify-center p-12 mt-auto mb-auto'>
              <Tabuleiro array={tabuleiro} onClickButton={handleClick}/>
            </div>
          </div>
        </div>
      )}

      {estadoJogo === 'x' && (
        <div>
          <GameOver jogador={'Jogador 1 venceu'} jogarNovamente={onClickreset}/>
        </div>
      )} 
    
      {estadoJogo === 'o' && (
        <div>
          <GameOver jogador={'Jogador 2 venceu'} jogarNovamente={onClickreset}/>
        </div>
      )}

      {estadoJogo === 'Empate' && (
        <div>
          <GameOver jogador={'Empatou'} jogarNovamente={onClickreset}/>
        </div>
      )}  
    </>
  )
}

export default App;
