player.onChat("chicken", function () {
    for (let index = 0; index < 50; index++) {
        mobs.spawn(CHICKEN, pos(0, 10, 0))
    }
})
