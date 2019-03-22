const catchBunny = Catch()
const render = RabbitRender()

let secondsRemaining
let timerID

const gameOver = function(){
    clearInterval(timerID)
    render.resetGame()
    $("#main-screen").append(`<div style="color: red; font-size: 48px; font-weight: bold; position: absolute; left: 40%; top: 40%">Game Over</div>`)
    $("#button").text("Start over")
}

const winGame = function(){
    clearInterval(timerID)
    render.resetGame()
    $("#main-screen").append(`<div style="color: darkblue; font-size: 48px; font-weight: bold; position: absolute; left: 40%; top: 40%">You win!</div>`)
    $("#button").text("Start over")
}

const clock = function(){
    $("#timer").text(`${secondsRemaining} seconds remaining`)
    $("#timer").css("background-color", "lightblue")
    if(secondsRemaining < 4 && secondsRemaining > 0){
        for(let i = 0; i < secondsRemaining; i ++){
            $("#timer").css("background-color", "lightblue")
            setTimeout(function(){
                $("#timer").css("background-color", "red")
            }, 100)
        }
    }
    if(secondsRemaining <= 0){
        gameOver()
    }
    secondsRemaining --
}

const runClock = function(){
    $("#timer").text(`${secondsRemaining + 1} seconds remaining`)
    timerID = setInterval(clock, 1000)
}

const nextLevel = function(){
    catchBunny.increaseLevel()
    $("#main-screen").css("background-color", "yellow")
    setTimeout(function(){
        secondsRemaining = 1 + catchBunny.getLevel()
        $("#main-screen").css("background-color", "lightblue")
    }, 100)
    if(catchBunny.getLevel() >= 11){
        winGame()
    }
    else{
        setTimeout(function(){
            render.renderLevel(catchBunny.getRabbits(), catchBunny.getLevel())
        }, 400)
    }
}

$("#button").on("click", function(){
    secondsRemaining = 1
    clearInterval(timerID)
    catchBunny.gameReset()
    render.renderLevel(catchBunny.getRabbits(), catchBunny.getLevel())
    runClock()
})

$("#main-screen").on("click", ".rabbit", function(){
    catchBunny.removeRabbit($(this).data().place)
    render.renderRabbitCount(catchBunny.getRabbits())
    $(this).remove()
    if(catchBunny.getRabbits().length < 1){
        nextLevel()
    }
})


