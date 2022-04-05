scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile45`, function (sprite, location) {
    dog.sayText("A to press", 100, false)
    if (controller.A.isPressed()) {
        for (let temporary of tiles.getTilesByType(assets.tile`myTile45`)) {
            tiles.setTileAt(temporary, assets.tile`myTile35`)
        }
        for (let temporary of tiles.getTilesByType(assets.tile`myTile43`)) {
            tiles.setTileAt(temporary, assets.tile`myTile4`)
        }
    }
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile30`, function (sprite, location) {
    sprite.destroy(effects.fire, 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile34`, function (sprite, location) {
    dog.sayText("A to press", 100, false)
    if (controller.A.isPressed()) {
        for (let temporary of tiles.getTilesByType(assets.tile`myTile34`)) {
            tiles.setTileAt(temporary, assets.tile`myTile35`)
        }
        for (let temporary of tiles.getTilesByType(assets.tile`myTile36`)) {
            tiles.setTileAt(temporary, assets.tile`myTile4`)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
    if (diamond_chest_open) {
    	
    } else {
        diamond_chest_open = sprites.create(img`
            . b b b b b b b b b b b b b b . 
            b 6 9 9 9 9 9 9 9 9 9 9 9 9 9 b 
            b 6 9 9 9 9 9 9 9 9 9 9 9 9 6 b 
            b 6 6 9 9 9 9 9 9 9 9 9 9 6 6 b 
            b b b b b b b d d b b b b b b b 
            . b b b b b b c c b b b b b b . 
            b c c 8 8 c b c c b c c c c c b 
            b 8 c 8 8 c 8 b b 8 c 8 9 8 c b 
            b 8 8 9 9 8 9 9 8 8 9 f 8 9 8 b 
            b 9 f 9 8 f 8 9 f 9 8 8 8 8 f b 
            b b b b b b b b b b b b b b b b 
            b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b 
            b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b 
            b c 6 6 6 6 6 6 6 6 6 6 6 6 c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `, SpriteKind.Player)
        tiles.placeOnRandomTile(diamond_chest_open, assets.tile`myTile24`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile32`, function (sprite, location) {
    dog.sayText("A to press", 100, false)
    if (controller.A.isPressed()) {
        for (let temporary of tiles.getTilesByType(assets.tile`myTile32`)) {
            tiles.setTileAt(temporary, assets.tile`myTile35`)
        }
        for (let temporary of tiles.getTilesByType(assets.tile`myTile37`)) {
            tiles.setTileAt(temporary, assets.tile`myTile4`)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile46`, function (sprite, location) {
    dog.sayText("A to press", 100, false)
    if (controller.A.isPressed()) {
        for (let temporary of tiles.getTilesByType(assets.tile`myTile46`)) {
            tiles.setTileAt(temporary, assets.tile`myTile35`)
        }
        for (let temporary of tiles.getTilesByType(assets.tile`myTile39`)) {
            tiles.setTileAt(temporary, assets.tile`myTile4`)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile25`, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile42`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile39`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile37`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile40`, function (sprite, location) {
    dog.sayText("A to press", 100, false)
    if (controller.A.isPressed()) {
        for (let temporary of tiles.getTilesByType(assets.tile`myTile40`)) {
            tiles.setTileAt(temporary, assets.tile`myTile35`)
        }
        for (let temporary of tiles.getTilesByType(assets.tile`myTile41`)) {
            tiles.setTileAt(temporary, assets.tile`myTile4`)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile36`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile44`, function (sprite, location) {
    dog.sayText("A to press", 100, false)
    if (controller.A.isPressed()) {
        for (let temporary of tiles.getTilesByType(assets.tile`myTile44`)) {
            tiles.setTileAt(temporary, assets.tile`myTile35`)
        }
        for (let temporary of tiles.getTilesByType(assets.tile`myTile42`)) {
            tiles.setTileAt(temporary, assets.tile`myTile4`)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile47`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level9`))
    tiles.placeOnRandomTile(dog, assets.tile`myTile10`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    if (chest_open) {
    	
    } else {
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
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile31`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level6`))
    tiles.placeOnRandomTile(dog, assets.tile`myTile10`)
    SpawnEnemyDrone()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile27`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level1`))
    tiles.placeOnRandomTile(dog, assets.tile`myTile10`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile41`, function (sprite, location) {
    game.over(false)
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    SpawnEnemyDrone()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile26`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level2`))
    tiles.placeOnRandomTile(dog, assets.tile`myTile10`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
function SpawnEnemyDrone () {
    for (let temporary of tiles.getTilesByType(assets.tile`myTile29`)) {
        enemy_drone = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 . 4 . . . . . . . 
            . . . . . 4 a 4 9 4 . . . . . . 
            . . . . 4 4 5 4 . 4 4 . . . . . 
            . . . 4 6 . 4 4 4 5 6 4 . . . . 
            . . . . 4 4 4 7 4 4 4 . . . . . 
            . . . 4 6 5 4 4 4 . 6 4 . . . . 
            . . . . 4 4 . 4 5 4 4 . . . . . 
            . . . . . 4 9 4 a 4 . . . . . . 
            . . . . . . 4 . 4 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        enemy_drone.follow(dog, 50)
        tiles.placeOnTile(enemy_drone, temporary)
    }
}
let enemy_drone: Sprite = null
let chest_open: Sprite = null
let diamond_chest_open: Sprite = null
let dog: Sprite = null
tiles.loadMap(tiles.createMap(tilemap`level3`))
dog = sprites.create(img`
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
