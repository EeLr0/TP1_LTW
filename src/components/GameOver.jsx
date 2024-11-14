function GameOver({jogador, jogarNovamente}){

    return(
        <div className="flex bg-gray-700 w-custom h-custom justify-center m-auto items-center">
            <div className="text-center">
                <h1 className="uppercase text-white font-bold text-2xl mb-5">Game Over!</h1>
                <p className="text-white text-lg mb-10">{jogador} o jogo.</p>
                <button className="border bg-white uppercase font-semibold text-xl" onClick={jogarNovamente}> Jogar Novamente</button>
            </div>
            
        </div>

    )
    
}

export default GameOver;