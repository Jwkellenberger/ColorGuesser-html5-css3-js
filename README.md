# ColorGuesser-HTML5-CSS3

### The face of the web app:
![colorGuesser1](https://i.imgur.com/679kEX2.png)

### The interactivity is kept minimal and is programmed in raw js

```
  var colors = [];
  var easy = false;
  var solutoin;
  var selector;
  var pickedColorIndex;
  var heading = document.querySelector('.header');
  var squares = document.querySelectorAll('.square');
  var solutionVisual = document.querySelector('.colorGoal');
  var response = document.querySelector('.response');
  var selectEasy = document.querySelector('.easy');
  var selectHard = document.querySelector('.hard');
  var recolor = document.querySelector('.recolor');
```

### The visual of failed picks results in the clicked div fading to an offblack color
![colorGuesser2](https://i.imgur.com/yLuaZS1.png)
All the non-correct answers have been clicked!

### The visual of all divs, and the header, fade to the "correct" color upon successful pick
![colorGuesser3](https://i.imgur.com/CzivqT6.png)

