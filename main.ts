scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    chest_open = sprites.create(img`
        . b b b b b b b b b b b b b b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b b b b b b b d d b b b b b b b 
        . b b b b b b c c b b b b b b . 
        b c c 5 5 c b c c b c c c c c b 
        b 5 c 5 5 c 4 b b 5 c 5 4 5 c b 
        b 4 5 4 4 5 4 4 5 4 4 f 5 4 5 b 
        b 4 f 4 4 f 4 4 f 4 5 5 5 4 f b 
        b b b b b b b b b b b b b b b b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(chest_open, assets.tile`myTile2`)
})
let chest_open: Sprite = null
tiles.loadMap(tiles.createMap(tilemap`level1`))
let dog = sprites.create(img`
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d d d d d d d f . f d f 
    f b d d b b d d 2 f . f d f 
    . f 2 2 2 2 2 2 b b f f d f 
    . f b d d d d d d b b d b f 
    . f d d d d d b d d f f f . 
    . f d f f f d f f d f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(dog, 75, 75)
tiles.placeOnRandomTile(dog, assets.tile`myTile10`)
scene.cameraFollowSprite(dog)
game.onUpdate(function () {
    if (dog.tileKindAt(TileDirection.Left, assets.tile`myTile17`)) {
        game.over(false)
    } else if (dog.tileKindAt(TileDirection.Top, assets.tile`myTile17`)) {
        game.over(false)
    } else if (dog.tileKindAt(TileDirection.Right, assets.tile`myTile17`)) {
        game.over(false)
    } else if (dog.tileKindAt(TileDirection.Bottom, assets.tile`myTile17`)) {
        game.over(false)
    } else {
    	
    }
})
