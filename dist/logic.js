const Catch = function(){

    let _rabbits
    let _level

    const getRabbits = () => _rabbits

    const getLevel = () => _level

    const addRabbits = function (num){
        for(let i = 1; i < (num + 1); i ++){
            _rabbits.push({count: i})
        }
    }

    const removeRabbit = function(place){
        for(let index in _rabbits){
            if(_rabbits[index].count == place){
                _rabbits.splice(index, 1)
            }
        }
    }

    const increaseLevel = function(){
        _level ++
        addRabbits(_level)
    }

    const gameReset = function(){
        _rabbits = [{count: 1}]
        _level = 1
    }

    return {
        getRabbits: getRabbits,
        getLevel: getLevel,
        removeRabbit: removeRabbit,
        increaseLevel: increaseLevel,
        gameReset: gameReset
    }
}