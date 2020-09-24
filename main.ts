input.onPinPressed(TouchPin.P0, function () {
    if (northSouth == 1) {
        northSouth = 0
        eastwest = 1
    } else {
        if (eastwest == 1) {
            eastwest = 0
            northSouth = 1
        }
    }
    basic.pause(100)
})
input.onButtonPressed(Button.A, function () {
    if (northSouth == 1) {
        if (eighteen == 0) {
            one = six
            two = seven
            three = eight
            four = nine
            five = ten
            six = eleven
            seven = twelve
            eight = 0
            nine = fourteen
            ten = fifteen
            eleven = sixteen
            twelve = seventeen
            fourteen = nineteen
            fifteen = twenty
            sixteen = twentyone
            seventeen = twenty_two
            eighteen = twentythree
            nineteen = twentyfour
            twenty = twentyfive
            if (randint(0, 10) == 0) {
                twentyone = 0
                twenty_two = 0
                twentythree = 0
                if (randint(0, 10) == 0) {
                    twentyfour = 0
                    twentyfive = 0
                } else {
                    twentyfour = 1
                    twentyfive = 1
                }
            } else {
                twentyone = 1
                twenty_two = 1
                twentythree = 0
                if (randint(0, 10) == 0) {
                    twentyfour = 0
                    twentyfive = 0
                } else {
                    twentyfour = 1
                    twentyfive = 1
                }
            }
        }
    } else {
        if (twelve == 0) {
            five = four
            ten = nine
            fifteen = fourteen
            twenty = nineteen
            twentyfive = twentyfour
            four = three
            nine = eight
            fourteen = 0
            nineteen = eighteen
            twentyfour = twentythree
            three = two
            eight = seven
            eighteen = seventeen
            twentythree = twenty_two
            two = one
            seven = six
            twelve = eleven
            seventeen = sixteen
            twenty_two = twentyone
            if (randint(0, 10) == 0) {
                one = 0
                six = 0
                eleven = 0
                if (randint(0, 10) == 0) {
                    sixteen = 0
                    twentyone = 0
                } else {
                    sixteen = 1
                    twentyone = 1
                }
            } else {
                one = 1
                six = 1
                eleven = 0
                if (randint(0, 10) == 0) {
                    sixteen = 0
                    twentyone = 0
                } else {
                    sixteen = 1
                    twentyone = 1
                }
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (northSouth == 1) {
        if (eight == 0) {
            twentyfive = twenty
            twentyfour = nineteen
            twentythree = eighteen
            twenty_two = seventeen
            twentyone = sixteen
            twenty = fifteen
            nineteen = fourteen
            eighteen = 0
            seventeen = twelve
            sixteen = eleven
            fifteen = ten
            fourteen = nine
            twelve = seven
            eleven = six
            ten = five
            nine = four
            eight = three
            seven = two
            six = one
            if (randint(0, 10) == 0) {
                one = 0
                two = 0
                three = 0
                if (randint(0, 10) == 0) {
                    four = 0
                    five = 0
                } else {
                    four = 1
                    five = 1
                }
            } else {
                one = 1
                two = 1
                three = 0
                if (randint(0, 10) == 0) {
                    four = 0
                    five = 0
                } else {
                    four = 1
                    five = 1
                }
            }
        }
    } else {
        if (fourteen == 0) {
            twentyone = twenty_two
            sixteen = seventeen
            eleven = twelve
            six = seven
            one = two
            twenty_two = twentythree
            seventeen = eighteen
            twelve = 0
            seven = eight
            two = three
            twentythree = twentyfour
            eighteen = nineteen
            thirteen = fourteen
            eight = nine
            three = four
            twentyfour = twentyfive
            nineteen = twenty
            fourteen = fifteen
            nine = ten
            five = six
            if (randint(0, 10) == 0) {
                one = 0
                six = 0
                eleven = 0
                if (randint(0, 10) == 0) {
                    sixteen = 0
                    twentyone = 0
                } else {
                    sixteen = 1
                    twentyone = 1
                }
            } else {
                one = 1
                six = 1
                eleven = 0
                if (randint(0, 10) == 0) {
                    sixteen = 0
                    twentyone = 0
                } else {
                    sixteen = 1
                    twentyone = 1
                }
            }
        }
    }
})
let twentyfive = 0
let twentyfour = 0
let twentythree = 0
let twenty_two = 0
let twentyone = 0
let twenty = 0
let nineteen = 0
let eighteen = 0
let seventeen = 0
let sixteen = 0
let fifteen = 0
let fourteen = 0
let thirteen = 0
let twelve = 0
let eleven = 0
let ten = 0
let nine = 0
let eight = 0
let seven = 0
let six = 0
let five = 0
let four = 0
let three = 0
let two = 0
let one = 0
let northSouth = 0
let eastwest = 0
eastwest = 0
northSouth = 1
one = 1
two = 1
three = 0
four = 1
five = 1
six = 1
seven = 1
eight = 0
nine = 1
ten = 1
eleven = 0
twelve = 0
thirteen = 0
fourteen = 0
fifteen = 0
sixteen = 1
seventeen = 1
eighteen = 0
nineteen = 1
twenty = 1
twentyone = 1
twenty_two = 1
twentythree = 0
twentyfour = 1
twentyfive = 1
basic.forever(function () {
    led.unplot(0, 0)
    led.unplot(1, 0)
    led.unplot(2, 0)
    led.unplot(3, 0)
    led.unplot(4, 0)
    led.unplot(0, 1)
    led.unplot(1, 1)
    led.unplot(2, 1)
    led.unplot(3, 1)
    led.unplot(4, 1)
    led.unplot(0, 2)
    led.unplot(1, 2)
    led.unplot(2, 2)
    led.unplot(3, 2)
    led.unplot(4, 2)
    led.unplot(0, 3)
    led.unplot(1, 3)
    led.unplot(2, 3)
    led.unplot(3, 3)
    led.unplot(4, 3)
    led.unplot(0, 4)
    led.unplot(1, 4)
    led.unplot(2, 4)
    led.unplot(3, 4)
    led.unplot(4, 4)
    if (one == 1) {
        led.plot(0, 0)
    }
    if (two == 1) {
        led.plot(1, 0)
    }
    if (three == 1) {
        led.plot(2, 0)
    }
    if (four == 1) {
        led.plot(3, 0)
    }
    if (five == 1) {
        led.plot(4, 0)
    }
    if (six == 1) {
        led.plot(0, 1)
    }
    if (seven == 1) {
        led.plot(1, 1)
    }
    if (eight == 1) {
        led.plot(2, 1)
    }
    if (nine == 1) {
        led.plot(3, 1)
    }
    if (ten == 1) {
        led.plot(4, 1)
    }
    if (eleven == 1) {
        led.plot(0, 2)
    }
    if (twelve == 1) {
        led.plot(1, 2)
    }
    led.plotBrightness(2, 2, 1)
    if (fourteen == 1) {
        led.plot(3, 2)
    }
    if (fifteen == 1) {
        led.plot(4, 2)
    }
    if (sixteen == 1) {
        led.plot(0, 3)
    }
    if (seventeen == 1) {
        led.plot(1, 3)
    }
    if (eighteen == 1) {
        led.plot(2, 3)
    }
    if (nineteen == 1) {
        led.plot(3, 3)
    }
    if (twenty == 1) {
        led.plot(4, 3)
    }
    if (twentyone == 1) {
        led.plot(0, 4)
    }
    if (twenty_two == 1) {
        led.plot(1, 4)
    }
    if (twentythree == 1) {
        led.plot(2, 4)
    }
    if (twentyfour == 1) {
        led.plot(3, 4)
    }
    if (twentyfive == 1) {
        led.plot(4, 4)
    }
})
