const RabbitRender = function(){

    const randomColors = {
        0: "1abc9c",
        1: "2ecc71",
        2: "3498db",
        3: "9b59b6",
        4: "34495e",
        5: "f1c40f",
        6: "e67e22",
        7: "e74c3c",
        8: "ecf0f1",
        9: "95a5a6",
        10: "000000"
    }

    const renderRabbitCount = function(rabbits){
        $("#count").text(`Bunnies remaining: ${rabbits.length}`)
    }

    const renderLevel = function(rabbits, level){
        $("#main-screen").empty()
        for(let rabbit of rabbits){
            let h = Math.random()
            let c = randomColors[Math.round(10 * Math.random())]
            $("#main-screen").append(`
                <i class="fas fa-horse rabbit" data-place="${rabbit.count}" style="left: ${92 * Math.random()}%; top: ${82 * h}%; color: #${c}; font-size: ${(50 * h) + 10}px"></i>
            `)
            $("#level").text(`Level: ${level}`)
            renderRabbitCount(rabbits)
            $("#button").text("Restart")
        }
    }

    const resetGame = function(){
        $("#main-screen").empty()
        $("#count").empty()
        $("#level").empty()
        $("#timer").empty()
        $("#timer").css("background-color", "lightblue")
    }



    return {
        renderRabbitCount: renderRabbitCount,
        renderLevel: renderLevel,
        resetGame: resetGame
    }
}