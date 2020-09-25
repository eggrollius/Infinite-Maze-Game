<img src = "https://cdn.glitch.com/27e0f91d-ab19-4bb4-9235-59a1bf3d3fb0%2Floop(1).png?v=1600996927137"  height ="500px">  

#                                                        Infinite Maze

**By: Ethan**

#### Description:

In infinite maze runner only what you can see is defenitive. In this game you can roam the hallways of a maze forever, if you decide to turn around you will not recognize what you see.




#### Controls:

A: Down/Left
B: Up/Right

P0: Switch Direction (North-South to East-West)

#### Work Logs:

###### Day 1: 
* Planned Functions
* Planned Data Structures
* Planned Peripherals
* Programmed Start Up Sequence

###### Day 2
* Created First Data Structure and Successfully Tested It
* Completed The Game Loop (While True:)
* Completed one instance of the movement function

###### Day 3
* Discovered that the data format for displaying LED images was not an array or tuple
* Unsuccesfully attempted to create an "array to image" converting algorithm
* Decided to restructure the data format into seperate variables representing each LED

###### Day 4
* Switched from the Python text editor to MakeCode browser python IDE
* Started by modeling and testing the data format first before begining any other work
* Created and completed all game functions
* Finished the game by establishing a game loop.

###### Day 4.5 (At Home)
 * Uploaded to Github
 * Made 2 bug fixes and tweaked the RNG parameters.
 * Assembled Work Logs and Code Notebook

# Record of Thinking
<p style="font-family:verdana; font-size:16px;">If I was to use one phrase to describe this project I would use "practical" because unlike a REPL assignment which has one goal, a project has many goals. A REPL may ask you to build a single function or return one value, where is in a whole game you will build many functions whose success depends on the others. In a project you're not given a model data structure you have to create your own. When you're creating a project you're creating something that has never been created, you cannot just google it. The biggest surprise was when it worked, at that point I had  over 29 different versions of my program in my downloads folder. At that point I was expecting to see "ERROR LINE ##" scrolling across the screen every time, so when I actually saw the game work I was actually taken by surprise.After deciding to restart the project I consulted Sean and Luka at break for ideas on how to manipulate the newly modeled data structure. Sean had affirmed some of my previously existing ideas, and Luka was useless as usual.If I had more time for this project I would have created a more user friendly  control scheme using a four directional joy stick instead of three buttons. However the joy stick has much more incoming data to read and evalute compared to the single button.I became stuck when i discovered the Microbit display.show() function used a string instead of an array to represent the 25 leds.To fix the issue I essentially created my own display.show() function that uses my own data structure.</p>

<a href = "https://github.com/eggrollius/infinite-maze-game/blob/master/main.py"><h1>The Code</h1></a>

**This code declares all neccesarry variables**

```python
northSouth = 0
eastwest = 0
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
```

**This code waits for input from buttons and calls there respective function**

**basic.forever(on_forever) calls the game loop function continously it is equivelant to a while True: in traditional python**

```python
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)
input.on_button_pressed(Button.A, on_button_pressed_a)
input.on_button_pressed(Button.B, on_button_pressed_b)
basic.forever(on_forever)
```

**This function is called when the third peripheral button is presed**

**The function switches between north-south mode and east-west mode**

```python
def on_pin_pressed_p0():
    global northSouth, eastwest
    if northSouth == 1:
        northSouth = 0
        eastwest = 1
    elif eastwest == 1:
        eastwest = 0
        northSouth = 1
    basic.pause(100)
```

**This function is called when the A button is pressed**

**This function checks wether the game is in north south mode or east west mode**

**If it is north south mode it moves the character down 1 unit**

**If it is east west mode it moves the character 1 unit to the right**

```python
def on_button_pressed_a():
    global one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty, twentyone, twenty_two, twentythree, twentyfour, twentyfive
    if northSouth == 1:
        if eighteen == 0:
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
            if randint(0, 10) == 0:
                twentyone = 0
                twenty_two = 0
                twentythree = 0
                if randint(0, 10) == 0:
                    twentyfour = 0
                    twentyfive = 0
                else:
                    twentyfour = 1
                    twentyfive = 1
            else:
                twentyone = 1
                twenty_two = 1
                twentythree = 0
                if randint(0, 10) == 0:
                    twentyfour = 0
                    twentyfive = 0
                else:
                    twentyfour = 1
                    twentyfive = 1
    elif twelve == 0:
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
        if randint(0, 10) == 0:
            one = 0
            six = 0
            eleven = 0
            if randint(0, 10) == 0:
                sixteen = 0
                twentyone = 0
            else:
                sixteen = 1
                twentyone = 1
        else:
            one = 1
            six = 1
            eleven = 0
            if randint(0, 10) == 0:
                sixteen = 0
                twentyone = 0
            else:
                sixteen = 1
                twentyone = 1
```

**This function is called when the B button is pressed**

**This function checks wether the game is in north south mode or east west mode**

**If it is north south mode it moves the character up 1 unit**

**If it is east west mode it moves the character 1 unit to the left**

```python
def on_button_pressed_b():
    global twentyfive, twentyfour, twentythree, twenty_two, twentyone, twenty, nineteen, eighteen, seventeen, sixteen, fifteen, fourteen, twelve, eleven, ten, nine, eight, seven, six, one, two, three, four, five, thirteen
    if northSouth == 1:
        if eight == 0:
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
            if randint(0, 10) == 0:
                one = 0
                two = 0
                three = 0
                if randint(0, 10) == 0:
                    four = 0
                    five = 0
                else:
                    four = 1
                    five = 1
            else:
                one = 1
                two = 1
                three = 0
                if randint(0, 10) == 0:
                    four = 0
                    five = 0
                else:
                    four = 1
                    five = 1
    elif fourteen == 0:
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
        if randint(0, 10) == 0:
            one = 0
            six = 0
            eleven = 0
            if randint(0, 10) == 0:
                sixteen = 0
                twentyone = 0
            else:
                sixteen = 1
                twentyone = 1
        else:
            one = 1
            six = 1
            eleven = 0
            if randint(0, 10) == 0:
                sixteen = 0
                twentyone = 0
            else:
                sixteen = 1
                twentyone = 1
```

**This function defines the game loop which is called continously forever**

```python
def on_forever():
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
    if one == 1:
        led.plot(0, 0)
    if two == 1:
        led.plot(1, 0)
    if three == 1:
        led.plot(2, 0)
    if four == 1:
        led.plot(3, 0)
    if five == 1:
        led.plot(4, 0)
    if six == 1:
        led.plot(0, 1)
    if seven == 1:
        led.plot(1, 1)
    if eight == 1:
        led.plot(2, 1)
    if nine == 1:
        led.plot(3, 1)
    if ten == 1:
        led.plot(4, 1)
    if eleven == 1:
        led.plot(0, 2)
    if twelve == 1:
        led.plot(1, 2)
    led.plot_brightness(2, 2, 1)
    if fourteen == 1:
        led.plot(3, 2)
    if fifteen == 1:
        led.plot(4, 2)
    if sixteen == 1:
        led.plot(0, 3)
    if seventeen == 1:
        led.plot(1, 3)
    if eighteen == 1:
        led.plot(2, 3)
    if nineteen == 1:
        led.plot(3, 3)
    if twenty == 1:
        led.plot(4, 3)
    if twentyone == 1:
        led.plot(0, 4)
    if twenty_two == 1:
        led.plot(1, 4)
    if twentythree == 1:
        led.plot(2, 4)
    if twentyfour == 1:
        led.plot(3, 4)
    if twentyfive == 1:
        led.plot(4, 4)
```


```python

```
