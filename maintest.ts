let position = new location.position()

    let current = position.read()
    console.log("Current position: " + current.x + ", " + current.y)

    position.reset()
    current = position.read()
    console.log("Current position: " + current.x + ", " + current.y)

    position.goto(10, 10)
    current = position.read()
    console.log("Current position: " + current.x + ", " + current.y)

