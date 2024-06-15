namespace SpriteKind {
    export const sign = SpriteKind.create()
    export const sign2 = SpriteKind.create()
    export const sign3 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.sign, function (sprite, otherSprite) {
    sign1.sayText("\"use wasd to move!\"(just a and d)", 2000, false)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Mech,
    [img`
        ............................................................
        ............................................................
        ............................................................
        ..........f.................................................
        ............................................................
        ..........f.................................................
        ..........f.f...............................................
        ..........f.................................................
        ..........f.f...............................................
        ..........f.ffffffffffffffffff..............................
        ..........f.ffbbbb66666666666f..............................
        ..........ffffbbbb6fffffffff6f..............................
        ..........ffffffffff7777777fff..............................
        ..........ffcfbbbb6f7667767f6f..............................
        ..........ffcfbbbb6f7667667f6f..............................
        .1.........fcfffffff7667767fff..............................
        ...........fcfccccbf7667767fbf..............................
        ...........fffffffff7777777fff..............................
        .............fccccbfffffffffbf..............................
        .............fccccbbbbbbbbbbbf..............................
        .............fffffffffffffffff..............................
        ................fccbbbbbbbf.................................
        ..............ffffcccccccccc................................
        ..............fcccbbbbbbbbbf................................
        ............ffffffffffffffff................................
        ..........efddddfffffffffffff...............................
        ........eeddddffbbfbbbbbbbffff..............................
        ......eeddddffefffbffffffbfeeff.............................
        ....eeddddffbdeeffdbe544f6feffeff...........................
        ...efffffffbffdefdee6efff6eeeeeffff.........................
        ......6fe6fbfff24eef6e54e6ebffefff..........................
        .....f6e6fe6fee22fff6eeee6ebbbbff...........................
        .....fffffe6eedfedff6e45e6ebffbf6f..........................
        .....fbbbefe6dffeed6eeeee6ebbbbf6f..........................
        ....feeeeeefe6fffe6e666666efffffe6f.........................
        ....fbbbfeefbe6666e6b6bbb6e6f6f6eff.........................
        ....eeeeefffffeeeef6666666e6f6ef7ff.........................
        ...fbbbfeef...f6f6ffeeeeeee7fffef66e........................
        ...ffffeff....f6e6e2f2f4f5e7ffbbbeee........................
        ..ff6e6fef...f6ef7eeeeeeeee7f.fbf666e.......................
        ..f7e6fff...eeeeef76f6b6ff7ff.ffbeeee.......................
        ..eef7f.....e66666ffe666e7f6e..fbbb666e.....................
        .ebbbff....eeeee6ddfe6b6ef666e.fbbfb71e.....................
        ebb6bef....e6666fddde666e666ee..fbbff77e....................
        eb666ef...e6666ddfdfeeeeed6e66e.fbbbbf66ee..................
        ffeffef...eeeefdddff.fdddde666e..fbbbfbbbe..................
        fbb66ef...ff6f6fddf...ffffd66ee..fbbfffff...................
        fbf66ef...f7fe7ffdf...fdddd6e6f...fffffe77..................
        .fffef...eeee7ff6f.....fff6ef6ff.....77ef7..................
        .........e666ff7f......f6f7f77ee.....77fe77.................
        ........e6666bbff.......ffff6e66e....7.7ef77................
        ........e6666bbbf.......fbbbf666e....77ffef7................
        ........feeeebbbf.......fbbbb66ef.....77fef7................
        .......fbbbbbfff.........fbbbbebbf.....777f7................
        .......feeeefeef.........fffffbbef......7fe7................
        .......fbbbbefff.........feeeebebf......77e7................
        ........fffffef...........fffffbf........7e7................
        .........f6ffff...........feeeeff........777................
        .........e7e6ff...........ffffff6f........77................
        ........e7e6f...............f6fe7e.........7................
        .......ff7e7f...............f6e7ef..........................
        ......fbbffef..............ff7e7fbbf........................
        .....feeeeffff............ff7effeeeef.......................
        .....fbbbbffeef..........feeffffbbbbf.......................
        `,img`
        ............................................................
        ............................................................
        ............................................................
        ..........f.................................................
        ............................................................
        ..........f.................................................
        ..........f.f...............................................
        ..........f.................................................
        ..........f.f...............................................
        ..........f.ffffffffffffffffff..............................
        ..........f.ffbbbb66666666666f..............................
        ..........ffffbbbb6fffffffff6f..............................
        ..........ffffffffff7777777fff..............................
        ..........ffcfbbbb6f7667767f6f..............................
        ..........ffcfbbbb6f7667667f6f..............................
        .1.........fcfffffff7667767fff..............................
        ...........fcfccccbf7667767fbf..............................
        ...........fffffffff7777777fff..............................
        .............fccccbfffffffffbf..............................
        .............fccccbbbbbbbbbbbf..............................
        .............fffffffffffffffff..............................
        ................fccbbbbbbbf.................................
        ..............ffffcccccccccc................................
        ..............fcccbbbbbbbbbf................................
        ............ffffffffffffffff................................
        ..........efddddfffffffffffff...............................
        ........eeddddffbbfbbbbbbbffff..............................
        ......eeddddffefffbffffffbfeeff.............................
        ....eeddddffbdeeffdbe544f6feffeff...........................
        ...efffffffbffdefdee6efff6eeeeeffff.........................
        ......6fe6fbfff24eef6e54e6ebffefff..........................
        .....f6e6fe6fee22fff6eeee6ebbbbff...........................
        .....fffffe6eedfedff6e45e6ebffbf6f..........................
        .....fbbbefe6dffeed6eeeee6ebbbbf6f..........................
        ....feeeeeefe6fffe6e666666efffffe6f.........................
        ....fbbbfeefbe6666e6b6bbb6e6f6f6e6ff........................
        ....eeeeefffffeeeef6666666e6f6ef7eff........................
        ...fbbbfeef...f6f6ffeeeeeee7fffef6.66e......................
        ...ffffeff....f6e6e2f2f4f5e7ffbbbeeeee......................
        ..ff6e6fef...f6ef7eeeeeeeee7f.fbfbb666e.....................
        ..f7e6fff...eeeeef76f6b6ff7ff.ffbbbeeee.....................
        ..eef7f.....e66666ffe666e7f6e..fbbbbb666e...................
        .ebbbff....eeeee6ddfe6b6ef666e.fbfbbfb71e...................
        ebb6bef....e6666fddde666e666ee..fbbbbff77e..................
        eb666ef...e6666ddfdfeeeeed6e66e.fbbbbbbf66ee................
        ffeffef...eeeefdddff.fdddde666e..fbbbbbfbbbe................
        fbb66ef...ff6f6fddf...ffffd66ee..ffbbbfffff.................
        fbf66ef...f7fe7ffdf...fdddd6e6f....ffffffe77................
        .fffef...eeee7ff6f.....fff6ef6ff.......77ef7................
        .........e666ff7f......f6f7f77ee.......77fe77...............
        ........e6666bbff.......ffff6e66e......7.7ef77..............
        ........e6666bbbf.......fbbbf666e......77ffef7..............
        ........feeeebbbf.......fbbbb66ef.......77fef7..............
        .......fbbbbbfff.........fbbbbebbf.......777f7..............
        .......feeeefeef.........fffffbbef........7fe7..............
        .......fbbbbefff.........feeeebebf........77e7..............
        ........fffffef...........fffffbf..........7e7..............
        .........f6ffff...........feeeeff..........777..............
        .........e7e6ff...........ffffff6f..........77..............
        ........e7e6f...............f6fe7e...........7..............
        .......ff7e7f...............f6e7eff.........................
        ......fbbffef..............ff7e7fbbf........................
        .....feeeeffff............ff7effeeeef.......................
        .....fbbbbffeef..........feeffffbbbbf.......................
        `,img`
        ............................................................
        ............................................................
        ............................................................
        ..........f.................................................
        ............................................................
        ..........f.................................................
        ..........f.f...............................................
        ..........f.................................................
        ..........f.f...............................................
        ..........f.ffffffffffffffffff..............................
        ..........f.ffbbbb66666666666f..............................
        ..........ffffbbbb6fffffffff6f..............................
        ..........ffffffffff7777777fff..............................
        ..........ffcfbbbb6f7667767f6f..............................
        ..........ffcfbbbb6f7667667f6f..............................
        .1.........fcfffffff7667767fff..............................
        ...........fcfccccbf7667767fbf..............................
        ...........fffffffff7777777fff..............................
        .............fccccbfffffffffbf..............................
        .............fccccbbbbbbbbbbbf..............................
        .............fffffffffffffffff..............................
        ................fccbbbbbbbf.................................
        ..............ffffcccccccccc................................
        ..............fcccbbbbbbbbbf................................
        ............ffffffffffffffff................................
        ..........efddddfffffffffffff...............................
        ........eeddddffbbfbbbbbbbffff..............................
        ......eeddddffefffbffffffbfeeff.............................
        ....eeddddffbdeeffdbe544f6feffeff...........................
        ...efffffffbffdefdee6efff6eeeeeffff.........................
        ......6fe6fbfff24eef6e54e6ebffefff..........................
        .....f6e6fe6fee22fff6eeee6ebbbbff...........................
        .....fffffe6eedfedff6e45e6ebffbf6f..........................
        .....fbbbefe6dffeed6eeeee6ebbbbf6f..........................
        ....feeeeeefe6fffe6e666666efffffe6f.........................
        ....fbbbfeefbe6666e6b6bbb6e6f6f6e6ff........................
        ....eeeeefffffeeeef6666666e6f6ef7eff........................
        ...fbbbfeef...f6f6ffeeeeeee7fffef6.66e......................
        ...ffffeff....f6e6e2f2f4f5e7ffbbbeeeee......................
        ..ff6e6fef...f6ef7eeeeeeeee7f.fbfbb666e.....................
        ..f7e6fff...eeeeef76f6b6ff7ff.ffbbbeeee.....................
        ..eef7f.....e66666ffe666e7f6e..fbbbbb666e...................
        .ebbbff....eeeee6ddfe6b6ef666e.fbfbbfb71e...................
        ebb6bef....e6666fddde666e666ee..fbbbbff77e..................
        eb666ef...e6666ddfdfeeeeed6e66e.fbbbbbbf66ee................
        ffeffef...eeeefdddff.fdddde666e..fbbbbbfbbbe................
        fbb66ef...ff6f6fddf...ffffd66ee..ffbbbfffff.................
        fbf66ef...f7fe7ffdf...fdddd6e6f....ffffffe77................
        .fffef...eeee7ff6f.....fff6ef6ff........77ef7...............
        .........e666ff7f......f6f7f77ee........77fe77..............
        ........e6666bbff.......ffff6e66e.......7.7ef77.............
        ........e6666bbbf.......fbbbf666e.......77ffef7.............
        ........feeeebbbf.......fbbbb66ef........77fef7.............
        .......fbbbbbfff.........fbbbbebbf........777f7.............
        .......feeeefeef.........fffffbbef.........7fe7.............
        .......fbbbbefff.........feeeebebf.........77e7.............
        ........fffffef...........fffffbf...........7e7.............
        .........f6ffff...........feeeeff...........777.............
        .........e7e6ff...........ffffff6f...........77.............
        ........e7e6f...............f6fe7e............7.............
        .......ff7e7f...............f6e7eff.........................
        ......fbbffef..............ff7e7fbbf........................
        .....feeeeffff............ff7effeeeef.......................
        .....fbbbbffeef..........feeffffbbbbf.......................
        `,img`
        ............................................................
        ............................................................
        ............................................................
        ..........f.................................................
        ............................................................
        ..........f.................................................
        ..........f.f...............................................
        ..........f.................................................
        ..........f.f...............................................
        ..........f.ffffffffffffffffff..............................
        ..........f.ffbbbb66666666666f..............................
        ..........ffffbbbb6fffffffff6f..............................
        ..........ffffffffff7777777fff..............................
        ..........ffcfbbbb6f7667767f6f..............................
        ..........ffcfbbbb6f7667667f6f..............................
        .1.........fcfffffff7667767fff..............................
        ...........fcfccccbf7667767fbf..............................
        ...........fffffffff7777777fff..............................
        .............fccccbfffffffffbf..............................
        .............fccccbbbbbbbbbbbf..............................
        .............fffffffffffffffff..............................
        ................fccbbbbbbbf.................................
        ..............ffffcccccccccc................................
        ..............fcccbbbbbbbbbf................................
        ............ffffffffffffffff................................
        ..........efddddfffffffffffff...............................
        ........eeddddffbbfbbbbbbbffff..............................
        ......eeddddffefffbffffffbfeeff.............................
        ....eeddddffbdeeffdbe544f6feffeff...........................
        ...efffffffbffdefdee6efff6eeeeeffff.........................
        ......6fe6fbfff24eef6e54e6ebffefff..........................
        .....f6e6fe6fee22fff6eeee6ebbbbff...........................
        .....fffffe6eedfedff6e45e6ebffbf6fff........................
        .....fbbbefe6dffeed6eeeee6ebbbbf6fff........................
        ....feeeeeefe6fffe6e666666efffffe6f66e......................
        ....fbbbfeefbe6666e6b6bbb6e6f6f6e6eeee......................
        ....eeeeefffffeeeef6666666e6f6ef7eb666e.....................
        ...fbbbfeef...f6f6ffeeeeeee7fffef6beeee.....................
        ...ffffeff....f6e6e2f2f4f5e7ffbbbebbb666e...................
        ..ff6e6fef...f6ef7eeeeeeeee7f.fbfbbbfb71e...................
        ..f7e6fff...eeeeef76f6b6ff7ff.ffbbbbbff77e..................
        ..eef7f.....e66666ffe666e7f6e..fbbbbbbbf66ee................
        .ebbbff....eeeee6ddfe6b6ef666e.fbfbbbbbfbbbe................
        ebb6bef....e6666fddde666e666ee..fbfbbbfffff.................
        eb666ef...e6666ddfdfeeeeed6e66e.fb.ffffffe777ef7............
        ffeffef...eeeefdddff.fdddde666e..f.........77fe77...........
        fbb66ef...ff6f6fddf...ffffd66ee..f.........7.7ef77..........
        fbf66ef...f7fe7ffdf...fdddd6e6f............77ffef7..........
        .fffef...eeee7ff6f.....fff6ef6ff............77fef7..........
        .........e666ff7f......f6f7f77ee.............777f7..........
        ........e6666bbff.......ffff6e66e.............7fe7..........
        ........e6666bbbf.......fbbbf666e.............77e7..........
        ........feeeebbbf.......fbbbb66ef..............7e7..........
        .......fbbbbbfff.........fbbbbebbf.............777..........
        .......feeeefeef.........fffffbbef..............77..........
        .......fbbbbefff.........feeeebebf...............7..........
        ........fffffef...........fffffbf...........................
        .........f6ffff...........feeeeff...........................
        .........e7e6ff...........ffffff6f..........................
        ........e7e6f...............f6fe7e..........................
        .......ff7e7f...............f6e7eff.........................
        ......fbbffef..............ff7e7fbbf........................
        .....feeeeffff............ff7effeeeef.......................
        .....fbbbbffeef..........feeffffbbbbf.......................
        `,img`
        ............................................................
        ............................................................
        ............................................................
        ..........f.................................................
        ............................................................
        ..........f.................................................
        ..........f.f...............................................
        ..........f.................................................
        ..........f.f...............................................
        ..........f.ffffffffffffffffff..............................
        ..........f.ffbbbb66666666666f..............................
        ..........ffffbbbb6fffffffff6f..............................
        ..........ffffffffff7777777fff..............................
        ..........ffcfbbbb6f7667767f6f..............................
        ..........ffcfbbbb6f7667667f6f..............................
        .1.........fcfffffff7667767fff..............................
        ...........fcfccccbf7667767fbf..............................
        ...........fffffffff7777777fff..............................
        .............fccccbfffffffffbf..............................
        .............fccccbbbbbbbbbbbf..............................
        .............fffffffffffffffff..............................
        ................fccbbbbbbbf.................................
        ..............ffffcccccccccc................................
        ..............fcccbbbbbbbbbf................................
        ............ffffffffffffffff................................
        ..........efddddfffffffffffff...............................
        ........eeddddffbbfbbbbbbbffff..............................
        ......eeddddffefffbffffffbfeeff.............................
        ....eeddddffbdeeffdbe544f6feffeff...........................
        ...efffffffbffdefdee6efff6eeeeeffff.........................
        ......6fe6fbfff24eef6e54e6ebffefff..........................
        .....f6e6fe6fee22fff6eeee6ebbbbff.ff........................
        .....fffffe6eedfedff6e45e6ebffbf6fff........................
        .....fbbbefe6dffeed6eeeee6ebbbbf6f.66e......................
        ....feeeeeefe6fffe6e666666efffffe6eeee......................
        ....fbbbfeefbe6666e6b6bbb6e6f6f6e6b666e.....................
        ....eeeeefffffeeeef6666666e6f6ef7ebeeee.....................
        ...fbbbfeef...f6f6ffeeeeeee7fffef6bbb666e...................
        ...ffffeff....f6e6e2f2f4f5e7ffbbbebbfb71e...................
        ..ff6e6fef...f6ef7eeeeeeeee7f.fbfbbbbff77e..................
        ..f7e6fff...eeeeef76f6b6ff7ff.ffbbbbbbbf66ee................
        ..eef7f.....e66666ffe666e7f6e..fbbbbbbbfbbbe................
        .ebbbff....eeeee6ddfe6b6ef666e.fbffbbbfffff.................
        ebb6bef....e6666fddde666e666ee..fb.ffffffe777ef7............
        eb666ef...e6666ddfdfeeeeed6e66e.fb.........77fe77...........
        ffeffef...eeeefdddff.fdddde666e..f.........7.7ef77..........
        fbb66ef...ff6f6fddf...ffffd66ee..f.........77ffef7..........
        fbf66ef...f7fe7ffdf...fdddd6e6f.............77fef7..........
        .fffef...eeee7ff6f.....fff6ef6ff.............777f7..........
        .........e666ff7f......f6f7f77ee..............7fe7..........
        ........e6666bbff.......ffff6e66e.............77e7..........
        ........e6666bbbf.......fbbbf666e..............7e7..........
        ........feeeebbbf.......fbbbb66ef..............777..........
        .......fbbbbbfff.........fbbbbebbf..............77..........
        .......feeeefeef.........fffffbbef...............7..........
        .......fbbbbefff.........feeeebebf..........................
        ........fffffef...........fffffbf...........................
        .........f6ffff...........feeeeff...........................
        .........e7e6ff...........ffffff6f..........................
        ........e7e6f...............f6fe7e..........................
        .......ff7e7f...............f6e7eff.........................
        ......fbbffef..............ff7e7fbbf........................
        .....feeeeffff............ff7effeeeef.......................
        .....fbbbbffeef..........feeffffbbbbf.......................
        `],
    500,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.sign2, function (sprite, otherSprite) {
    sign2.sayText("\"press space to jump!\"", 2000, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.sign3, function (sprite, otherSprite) {
    sign3.sayText("\"press enter to attack!\"", 2000, false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Mech.isHittingTile(CollisionDirection.Bottom)) {
        Mech.vy = -200
    }
})
function makeTutorial () {
    sign1 = sprites.create(img`
        f f f f f f f f f f f f f f f f 
        f e e e e e e e e e e e e e e f 
        f e 1 1 1 e e e 1 1 e e 1 e e f 
        f e e e e 1 e e e 1 e 1 e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e 1 1 1 e e 1 e e e 1 e e e f 
        f e e e e e e e e 1 e e e e e f 
        f e e e 1 e e 1 e e e 1 1 1 1 f 
        f e e e e e e e e e e e e e e f 
        f f f f f f e e e e f f f f f f 
        . . . . . f e e e e f . . . . . 
        . . . . . f e e e e f . . . . . 
        . . . . . f e e e e f . . . . . 
        . . . . . f e e e e f . . . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.sign)
    tiles.placeOnTile(sign1, tiles.getTileLocation(4, 8))
    sign2 = sprites.create(img`
        f f f f f f f f f f f f f f f f 
        f e e e e e e e e e e e e e e f 
        f e 1 1 1 e e e 1 1 e e 1 e e f 
        f e e e e 1 e e e 1 e 1 e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e 1 1 1 e e 1 e e e 1 e e e f 
        f e e e e e e e e 1 e e e e e f 
        f e e e 1 e e 1 e e e 1 1 1 1 f 
        f e e e e e e e e e e e e e e f 
        f f f f f f e e e e f f f f f f 
        . . . . . f e e e e f . . . . . 
        . . . . . f e e e e f . . . . . 
        . . . . . f e e e e f . . . . . 
        . . . . . f e e e e f . . . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.sign2)
    tiles.placeOnTile(sign2, tiles.getTileLocation(9, 8))
    sign3 = sprites.create(img`
        f f f f f f f f f f f f f f f f 
        f e e e e e e e e e e e e e e f 
        f e 1 1 1 e e e 1 1 e e 1 e e f 
        f e e e e 1 e e e 1 e 1 e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e 1 1 1 e e 1 e e e 1 e e e f 
        f e e e e e e e e 1 e e e e e f 
        f e e e 1 e e 1 e e e 1 1 1 1 f 
        f e e e e e e e e e e e e e e f 
        f f f f f f e e e e f f f f f f 
        . . . . . f e e e e f . . . . . 
        . . . . . f e e e e f . . . . . 
        . . . . . f e e e e f . . . . . 
        . . . . . f e e e e f . . . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.sign3)
    tiles.placeOnTile(sign3, tiles.getTileLocation(16, 6))
}
let sign3: Sprite = null
let sign2: Sprite = null
let sign1: Sprite = null
let Mech: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
scene.setBackgroundColor(11)
Mech = sprites.create(img`
    ..................................................
    ..................................................
    ..................................................
    ................f.................................
    ..................................................
    ................f.................................
    ................f.f...............................
    ................f.................................
    ................f.f...............................
    ................f.ffffffffffffffffff..............
    ................f.ffbbbb66666666666f..............
    ................ffffbbbb6fffffffff6f..............
    ................ffffffffff7777777fff..............
    ................ffcfbbbb6f7667767f6f..............
    ................ffcfbbbb6f7667667f6f..............
    ....1............fcfffffff7667767fff..............
    .................fcfccccbf7667767fbf..............
    .................fffffffff7777777fff..............
    ...................fccccbfffffffffbf..............
    ...................fccccbbbbbbbbbbbf..............
    ...................fffffffffffffffff..............
    ......................fccbbbbbbbf.................
    ....................ffffcccccccccc................
    ....................fcccbbbbbbbbbf................
    ..................ffffffffffffffff................
    ................efddddfffffffffffff...............
    ..............eeddddffbbfbbbbbbbffff..............
    ............eeddddffefffbffffffbfeeff.............
    ..........eeddddffbdeeffdbe544f6feffeff...........
    .........efffffffbffdefdee6efff6eeeeeffff.........
    ............6fe6fbfff24eef6e54e6ebffefff..........
    ...........f6e6fe6fee22fff6eeee6ebbbbff...........
    ...........fffffe6eedfedff6e45e6ebffbf6f..........
    ...........fbbbefe6dffeed6eeeee6ebbbbf6f..........
    ..........feeeeeefe6fffe6e666666efffffe6f.........
    ..........fbbbfeefbe6666e6b6bbb6e6f6f6e6ff........
    ..........eeeeefffffeeeef6666666e6f6ef7eff........
    .........fbbbfeef...f6f6ffeeeeeee7fffef666e.......
    .........ffffeff....f6e6e2f2f4f5e7ffbbbeeee.......
    ........ff6e6fef...f6ef7eeeeeeeee7f.fbfb666e......
    ........f7e6fff...eeeeef76f6b6ff7ff.ffbbeeee......
    ........eef7f.....e66666ffe666e7f6e..fbbb666e.....
    .......ebbbff....eeeee6ddfe6b6ef666e.fbfbb71e.....
    ......ebb6bef....e6666fddde666e666ee..fbbff77e....
    ......eb666ef...e6666ddfdfeeeeed6e66e.fbbbbf66ee..
    ......ffeffef...eeeefdddff.fdddde666e..fbbbfbbbe..
    ......fbb66ef...ff6f6fddf...ffffd66ee..fbbfffff...
    ......fbf66ef...f7fe7ffdf...fdddd6e6f...fffffe77..
    .......fffef...eeee7ff6f.....fff6ef6ff.....77ef7..
    ...............e666ff7f......f6f7f77ee.....77fe77.
    ..............e6666bbff.......ffff6e66e....7.7ef77
    ..............e6666bbbf.......fbbbf666e....77ffef7
    ..............feeeebbbf.......fbbbb66ef.....77fef7
    .............fbbbbbfff.........fbbbbebbf.....777f7
    .............feeeefeef.........fffffbbef......7fe7
    .............fbbbbefff.........feeeebebf......77e7
    ..............fffffef...........fffffbf........7e7
    ...............f6ffff...........feeeeff........777
    ...............e7e6ff...........ffffff6f........77
    ..............e7e6f...............f6fe7e.........7
    .............ff7e7f...............f6e7eff.........
    ............fbbffef..............ff7e7fbbf........
    ...........feeeeffff............ff7effeeeef.......
    ...........fbbbbffeef..........feeffffbbbbf.......
    `, SpriteKind.Player)
tiles.placeOnTile(Mech, tiles.getTileLocation(2, 7))
controller.moveSprite(Mech, 100, 0)
scene.cameraFollowSprite(Mech)
scaling.scaleToPercent(Mech, 60, ScaleDirection.Uniformly, ScaleAnchor.Middle)
Mech.ay = 600
makeTutorial()
forever(function () {
    if (characterAnimations.matchesRule(Mech, characterAnimations.rule(Predicate.MovingLeft))) {
        Mech.setImage(img`
            ..................................................
            ..................................................
            ..................................................
            .................................f................
            ..................................................
            .................................f................
            ...............................f.f................
            .................................f................
            ...............................f.f................
            ..............ffffffffffffffffff.f................
            ..............f66666666666bbbbff.f................
            ..............f6fffffffff6bbbbffff................
            ..............fff7777777ffffffffff................
            ..............f6f7677667f6bbbbfcff................
            ..............f6f7667667f6bbbbfcff................
            ..............fff7677667fffffffcf............1....
            ..............fbf7677667fbccccfcf.................
            ..............fff7777777fffffffff.................
            ..............fbfffffffffbccccf...................
            ..............fbbbbbbbbbbbccccf...................
            ..............fffffffffffffffff...................
            .................fbbbbbbbccf......................
            ................ccccccccccffff....................
            ................fbbbbbbbbbcccf....................
            ................ffffffffffffffff..................
            ...............fffffffffffffddddfe................
            ..............ffffbbbbbbbfbbffddddee..............
            .............ffeefbffffffbfffeffddddee............
            ...........ffeffef6f445ebdffeedbffddddee..........
            .........ffffeeeee6fffe6eedfedffbfffffffe.........
            ..........fffeffbe6e45e6fee42fffbf6ef6............
            ...........ffbbbbe6eeee6fff22eef6ef6e6f...........
            ..........f6fbffbe6e54e6ffdefdee6efffff...........
            ..........f6fbbbbe6eeeee6deeffd6efebbbf...........
            .........f6efffffe666666e6efff6efeeeeeef..........
            ........ff6e6f6f6e6bbb6b6e6666ebfeefbbbf..........
            ........ffe7fe6f6e6666666feeeefffffeeeee..........
            .......e666fefff7eeeeeeeff6f6f...feefbbbf.........
            .......eeeebbbff7e5f4f2f2e6e6f....ffeffff.........
            ......e666bfbf.f7eeeeeeeee7fe6f...fef6e6ff........
            ......eeeebbff.ff7ff6b6f67feeeee...fff6e7f........
            .....e666bbbf..e6f7e666eff66666e.....f7fee........
            .....e17bbfbf.e666fe6b6efdd6eeeee....ffbbbe.......
            ....e77ffbbf..ee666e666edddf6666e....feb6bbe......
            ..ee66fbbbbf.e66e6deeeeefdfdd6666e...fe666be......
            ..ebbbfbbbf..e666eddddf.ffdddfeeee...feffeff......
            ...fffffbbf..ee66dffff...fddf6f6ff...fe66bbf......
            ..77efffff...f6e6ddddf...fdff7ef7f...fe66fbf......
            ..7fe77.....ff6fe6fff.....f6ff7eeee...fefff.......
            .77ef77.....ee77f7f6f......f7ff666e...............
            77fe7.7....e66e6ffff.......ffbb6666e..............
            7feff77....e666fbbbf.......fbbb6666e..............
            7fef77.....fe66bbbbf.......fbbbeeeef..............
            7f777.....fbbebbbbf.........fffbbbbbf.............
            7ef7......febbfffff.........feefeeeef.............
            7e77......fbebeeeef.........fffebbbbf.............
            7e7........fbfffff...........fefffff..............
            777........ffeeeef...........ffff6f...............
            77........f6ffffff...........ff6e7e...............
            7.........e7ef6f...............f6e7e..............
            .........ffe7e6f...............f7e7ff.............
            ........fbbf7e7ff..............feffbbf............
            .......feeeeffe7ff............ffffeeeef...........
            .......fbbbbffffeef..........feeffbbbbf...........
            `)
    } else if (characterAnimations.matchesRule(Mech, characterAnimations.rule(Predicate.FacingRight))) {
        Mech.setImage(img`
            ..................................................
            ..................................................
            ..................................................
            ................f.................................
            ..................................................
            ................f.................................
            ................f.f...............................
            ................f.................................
            ................f.f...............................
            ................f.ffffffffffffffffff..............
            ................f.ffbbbb66666666666f..............
            ................ffffbbbb6fffffffff6f..............
            ................ffffffffff7777777fff..............
            ................ffcfbbbb6f7667767f6f..............
            ................ffcfbbbb6f7667667f6f..............
            ....1............fcfffffff7667767fff..............
            .................fcfccccbf7667767fbf..............
            .................fffffffff7777777fff..............
            ...................fccccbfffffffffbf..............
            ...................fccccbbbbbbbbbbbf..............
            ...................fffffffffffffffff..............
            ......................fccbbbbbbbf.................
            ....................ffffcccccccccc................
            ....................fcccbbbbbbbbbf................
            ..................ffffffffffffffff................
            ................efddddfffffffffffff...............
            ..............eeddddffbbfbbbbbbbffff..............
            ............eeddddffefffbffffffbfeeff.............
            ..........eeddddffbdeeffdbe544f6feffeff...........
            .........efffffffbffdefdee6efff6eeeeeffff.........
            ............6fe6fbfff24eef6e54e6ebffefff..........
            ...........f6e6fe6fee22fff6eeee6ebbbbff...........
            ...........fffffe6eedfedff6e45e6ebffbf6f..........
            ...........fbbbefe6dffeed6eeeee6ebbbbf6f..........
            ..........feeeeeefe6fffe6e666666efffffe6f.........
            ..........fbbbfeefbe6666e6b6bbb6e6f6f6e6ff........
            ..........eeeeefffffeeeef6666666e6f6ef7eff........
            .........fbbbfeef...f6f6ffeeeeeee7fffef666e.......
            .........ffffeff....f6e6e2f2f4f5e7ffbbbeeee.......
            ........ff6e6fef...f6ef7eeeeeeeee7f.fbfb666e......
            ........f7e6fff...eeeeef76f6b6ff7ff.ffbbeeee......
            ........eef7f.....e66666ffe666e7f6e..fbbb666e.....
            .......ebbbff....eeeee6ddfe6b6ef666e.fbfbb71e.....
            ......ebb6bef....e6666fddde666e666ee..fbbff77e....
            ......eb666ef...e6666ddfdfeeeeed6e66e.fbbbbf66ee..
            ......ffeffef...eeeefdddff.fdddde666e..fbbbfbbbe..
            ......fbb66ef...ff6f6fddf...ffffd66ee..fbbfffff...
            ......fbf66ef...f7fe7ffdf...fdddd6e6f...fffffe77..
            .......fffef...eeee7ff6f.....fff6ef6ff.....77ef7..
            ...............e666ff7f......f6f7f77ee.....77fe77.
            ..............e6666bbff.......ffff6e66e....7.7ef77
            ..............e6666bbbf.......fbbbf666e....77ffef7
            ..............feeeebbbf.......fbbbb66ef.....77fef7
            .............fbbbbbfff.........fbbbbebbf.....777f7
            .............feeeefeef.........fffffbbef......7fe7
            .............fbbbbefff.........feeeebebf......77e7
            ..............fffffef...........fffffbf........7e7
            ...............f6ffff...........feeeeff........777
            ...............e7e6ff...........ffffff6f........77
            ..............e7e6f...............f6fe7e.........7
            .............ff7e7f...............f6e7eff.........
            ............fbbffef..............ff7e7fbbf........
            ...........feeeeffff............ff7effeeeef.......
            ...........fbbbbffeef..........feeffffbbbbf.......
            `)
    }
})