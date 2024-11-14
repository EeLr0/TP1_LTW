function Player({nome, simbolo, className}){
    return(
        <div className={className}>
            <label className="pr-6">{nome}</label>
            <label>{simbolo}</label>
        </div>
    )
}

export default Player;