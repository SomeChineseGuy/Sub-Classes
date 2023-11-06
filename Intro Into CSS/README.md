### To Do

- [x] Demo the Tweeter project
- [x] Intro to HTML
- [x] Intro to CSS
- [x] DevTools
- [x] Box Model and Box Sizing
- [x] Flexbox

# Intro To CSS

![css](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week3/Day1/Lecture/assets/css.gif)

---

### Topics 📢

![Box](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week3/Day1/Lecture/assets/box.png)

- Writing semantic HTML
- Cascading Style Sheets
- Selectors
- Specificity
- Reset / Normalize
- Box Model
- Float
- Modern CSS

---

## Writing Semantic HTML

Learning HTML (Hypertext Markup Language) can be tricky. Here is an easy way to get started on learning HTML. Divide HTML up into 2 parts. Content tags and Containers tags.

---

### Content Tags

Content are tags that show content.

```HTML
<h1>This is a heading</h1>
<h2>This is a heading</h2>
<h3>This is a heading</h3>
<h4>This is a heading</h4>
<h5>This is a heading</h5>
<h6>This is a heading</h6>
<p>This is a paragraph</p>
<span> Span and paragraph tags are basically the smae </span>
<img src="https://http.cat/207"/>
<a href="https://www.google.com/">This is a link tag</a>
```

---

### Container tags

Container tags, contain and organize the layout of content. Organizing the layout with clear interpretation is called "Writing Semantic HTML".
To use a word semantically is to use it in a way that is properly aligned with the meaning of the word. When we misuse a word we are not using it semantically.

```HTML
<div></div> The most common
<nav></nav>
<header></header>
<article></article>
<section></section>
<main></main>
<aside></aside>
<footer></footer>
```

---

### Non-Semantic HTML

```HTML
<div>
  <div>
    <h1>Project one</h1>
    <p>Info on my Project</p>
  </div>
  <div>
    <h1>Project two</h1>
    <p>Info on my project</p>
  </div>
</div>
```

---

### Semantic HTML

```HTML
<section>
  <article>
    <h1>Project One</h1>
    <p>Info on Project</p>
  </article>
  <article>
    <h1>Project two</h1>
    <p>Info on Project</p>
  </article>
</section>
```

Here is a [cheatsheet](https://learn-the-web.algonquindesign.ca/topics/html-semantics-cheat-sheet/) for HTML tags.

### Parent and Child

```HTML
<section>
  <article> - This article has 2 child
    <img src="" alt="">
    <div> - This Div Has 3 child
      <h2>This is a heading</h2>
      <p>This is content</p>
      <p>This is more content</p>
    </div>
  </article>
</section>
```

#### Pro Tip not all CSS errors are CSS related, some are HTML

## Why is good HTML important to CSS?

Because sometimes CSS errors (especially Flexbox) comes from HTML errors. Also a good organization of HTML will reduce the amount of CSS you'll have to write.

---

# TOOLS 🔧🔨

- Chrome
  - Developer tools
    DevTools is your biggest friend with front-end development

---

# CSS 📃

![waterfall](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week3/Day1/Lecture/assets/waterfall.gif)

Cascading Style Sheets

- Acts like a tiered waterfall
  styles cascade or flow downwards adding to the styles below them.

The cascading algorithm determines how to find the value(style) to apply for each property for each document element.

---

# Applying Styles

Embedded

```HTML
<style>.inner{font-weight: 700;} </style>
```

External StyleSheet\*

```HTML
<link rel="stylesheet" href="waterfall.css">
```

```CSS
.inner{
   font-weight: 700;
   color: snow;
}
```

Inline

```HTML
<div class="box inner four" style="color: coral"></div>
```

# Syntax

```CSS
selector list {
   property: value;
}
```

We write the selector and then we write the CSS inside in the curly brackets

---

# IDs Vs Classes

When to use IDs vs Classes

Classes - Same class on multiple elements - Multiple classes on one element

```html
<div class="warrior rogue mage"></div>
<div class="mage"></div>
```

IDs are unique - each element can have at most one ID - You should have only one element with a particular ID - secret browser power url#idname

```html
<section id="hometown"></section>
```

\*\* Elements can have both classes and ID's

There is nothing you can do with a class in css that you can do with an ID and vise versa

---

### Type of Selectors (Ways to target CSS)

```CSS
div, section, p, h1 { /* Target HTML Tags */

}

#id { /* Target IDs */

}

.class { /* Target Classes */

}
```

This is how to target in CSS

### Selectors

Way we use tags, ID's, Classes to apply CSS to them.

---

# Specificity

```html
<section>
  <h1 class="red" id="green" style="color: purple">What Color am I?</h1>
</section>
```

```css
h1 {
  color: pink;
}

#green {
  color: green;
}

.red {
  color: red;
}
```

In this example, inline style will be first, then the ID(even though the class is below the id), then the class(because its lower than the h1 tag) and finally the h1 tag.

---

# Points based system

CSS Specificity works on a points based system. Each time you become more specific with your targetting, the more priorties it takes.

```html
<section>
  <article class="level-one">
    <div class="level-two">
      <h1 class="level-three red" id="green" style="color: purple">
        What Color am I?
      </h1>
    </div>
  </article>
</section>
```

```css
.level-one .level-two .level-three.red {
  /* 4 points */
  color: red;
}

.level-one .level-two .blue {
  /* 3 points */
  color: blue;
}
```

![Specificity](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week3/Day1/Breakout/assets/specificity1.png)

When two competing styles are applied to an element the one with the higher priority specificity gets applied.

---

## !important

```CSS
div{
   color: red !important;
}
```

- Important will move the style to the top of the specificity hierarchy.

- If everything is important than nothing is important

- If two elements are important than you look at specificity.

---

# Too specific

![Specific](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week3/Day1/Breakout/assets/ricknmorty.gif)

When are your selectors too specific?

```CSS
div a p > a.link.underline#home{
 text-decoration: underline;
}
```

- use ID's sparingly
- If you don't need a selector don't use it.

---

## Simple is better

In general you want to be light handed with classes and id's.

if we want our links to look a certain way

```HTML
<a href="www.nima.com" class="link"> </a>

```

instead we know it will be an `<a>` tag so

```HTML
<a href="wwww.nima.com" ></a>

```

---

# Organizing Styles

![organize](https://media.giphy.com/media/9Y6ZRYDjHbY6w8LA9C/giphy.gif)

```html
<section class="projects">
  <article class="project pic-left">
    <img src="" alt="" />
    <div class="project-content">
      <h2>My Project</h2>
      <p>Will code for sushi</p>
    </div>
  </article>
  <article class="project pic-right">
    <img src="" alt="" />
    <div class="project-content">
      <h2>My Project</h2>
      <p>Will code for sushi</p>
    </div>
  </article>
</section>
```

```css
/* Project Section */
.projects {
  padding: 40px 20px;
  background: tomato;
}

.projects .pic-left {
  /* Parent to child */
  display: flex;
}

.project.pic-right {
  /* Project Section */
  display: flex;
  flex-direction: row-reverse;
}
```

A good way to keep your organized write it in sections that reflect the way your HTML is layout.

---

# Reset / Normalize

![reset](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week3/Day1/Lecture/assets/reset.gif)

Reset  
A reset is removing any default browser styling, often called the user agent stylesheet.
The Goal is to remove any browser inconsistencies.

https://meyerweb.com/eric/tools/css/reset/

Normalize

> "Resets impose a homogenous visual style by flattening the default styles for almost all elements. In contrast, normalize.css retains many useful default browser styles. This means that you don’t have to redeclare styles for all the common typographic elements."

- Preserves user defaults
- Corrects common bugs

http://nicolasgallagher.com/about-normalize-css/

---

# Box Model 📦

![Box Model](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week3/Day1/Lecture/assets/boxmodel.png)

## All CSS tags have the box model. Each boxes have four parts to them. In the order of inside to out, it looks like Content -> Padding -> Border -> Margin.

### Content

This determines the size of content. We use height and width to control this setting.

### Padding

Padding increase the size of the tag WITHOUT increasing the size of the content. Padding also does this by pushing against the border.

```
padding-top: 20px;
padding-left: 20px;
padding-bottom: 20px;
padding-right: 20px;
padding: 20px 20px; - Top/bottom and Left/Right
padding: 20px; - All four sides
```

### Border

Border creates a border around the tag. Also it can change the shape of the tag from a square into a circle, or it can shave off a few pixels on the edges.

```css
.border {
  border: 1px solid black; /* size, style, color */
  border-radius: 5px; /* take a few pixels off the edges */
  border-radius: 50%; /* make a perfectly square tag into a circle */
}
```

```
border-style: none;
border-style: hidden;
border-style: dotted;
border-style: dashed;
border-style: solid;
border-style: double;
border-style: groove;
border-style: ridge;
border-style: inset;
border-style: outset;
```

## Margin

Margin is the shared space between all tags. Margin pushes alway from the border. Also since margin is the shared space Which ever tag has the larger margin, that tag's margin with over take the other.

# Box Model Demo

Here is an example of how the box model works. You can see with that the space created by the padding and border is still part of the clickable content created by the a tag. The margin however is not.

```html
<section>
  <a href="https://www.google.com/"
    ><img src="https://http.cat/207" class="box-demo" alt=""
  /></a>
  <a href="https://www.google.com/"
    ><img src="https://http.cat/207" class="box-demo box" alt=""
  /></a>
</section>
```

```css
.box-demo {
  width: 700px;
  height: 500px;
  background-color: tomato;
  padding-top: 20px;
  padding-left: 40px;
  padding-bottom: 20px;
  padding-right: 40px;
  padding: 20px 40px; /* same as the above */
  /* padding: 20px; Top Left Bottom Right TLBR */
  border-width: 10px;
  border-style: solid;
  border-color: green;
  border: 10px solid green; /* same as the above */
  border-radius: 20px;
  margin: 20px;
}

.box {
  box-sizing: border-box;
  margin-left: 70px;
}
```

### Pro tip: start with padding

## Box Sizing control

Content-box

- Height/Width = Content Size.
- Padding & Border additionally add to the size of the box.
- Cannot set total box size.

Border-box?

- Height/Width = Content Size + Padding + Border.
- Padding & Border accounted for in size.
- Width/Height sets total box size.

It is better to use border-box

# Real World Uses

```html
<a href="https://www.google.com/" class="button-full">Click Me!</a>
<a href="https://www.google.com/" class="button-clear">Click Me!</a>
```

```css
.button-full {
  padding: 10px 20px;
  background-color: red;
  color: white;
  font-size: 20px;
  text-decoration: none;
  border-radius: 5px;
}

.button-clear {
  padding: 10px 20px;
  color: purple;
  border: purple solid 1px;
  font-size: 20px;
  text-decoration: none;
  border-radius: 5px;
}

.button-clear:hover {
  background: purple;
  color: white;
}
```

This is the basic template for most of the buttons you see on the internet.

---

# Block vs Inline

Block Level:

- Starts on a new line
- Takes as much width as it can by default
- Structural
- Default: `<div>,<h1>-<h6>,<p>,<ul>,<nav>`

Inline:

- Does not start on a new line
- Doesn't affect the elements around it
- Can't set width or height ext..
- Content related
- Default: `<span>,<a>,<input>,<button>,<img>`

---

## Flexbox 💪🍱

Flexbox is the ability for the parent to move the child around. This means that fix will only work if there are child elements in the HTML.

```html
<section class="parent">
  <img src="" alt="" class="child" />
  <div class="child">
    <h1 class="will-not-be-effected-by-parent-flex"></h1>
    <p class=""></p>
  </div>
</section>
```

```css
.parent {
  display: flex; /* this tells the parent I now want to control the movement of the child */
  flex-direction: column; /* Do I want Rows or Columns */
  justify-content: space-around; /* how far away do i want the content in either the row/column */
  align-content: space-around; /* how far do i want the content in the opposite direction */
}
```

---

## Nesting 🐣

**Don't** put block elements inside inline elements

```HTML
   <a><div>Block</div></a>
```

- can cause inconsistent render, conflict between properties
  \*\* is a violation of html standards

**DO** put inline inside block

```HTML
  <div> <a>Inline</a></div>
```

Block and Inline are display properties, and can be changed in CSS

```CSS
   p{
       display: block;
   }
```

\*another display property is inline-block.

---

# Float ⛵

![Magazine](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week3/Day1/Lecture/assets/magazine.jpg)

Magazine layout => web layout

```CSS
   div{
       float: left; //or left or right
   }
```

clear floats
When we want our elements to start after an element that has been floated we have to _clear_ the float.

```CSS
   div{
       clear: both; //or left or right
   }
```

Inline-Block

- Behaves like inline but you can set the width and height.
- Like Block but does not add a line break after the element.

---

# Position

The position property specifies the type of positioning method used for an element

- static
  - default
  - cannot set top, right, bottom , or left
- relative
  - TRBL can be set to change position relative to where it would have been statically positioned.
- absolute
  - TRBL can be set to change position relative to the nearest positioned ancestor, or the html body.
- fixed
  - TRBL is set relative to the viewport so the element stays in the same position even when content is scrolled.
- sticky

---

# Looking into the Future/Present 🔭

## CSS Grid 📰

![CSS GRID](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week3/Day1/Lecture/assets/grid.png)

It is even newer than Flexbox, but isn't well-adopted yet. It is something you can learn on your own (and it is recommended that you do so).

https://caniuse.com/#search=css%20grid

---

# Frameworks

- Bootstrap
- Semantic UI
- Materialize

## Resources

- MDN
- CSS-Tricks is also great
  Add MDN to all of your search queries in Google to get MDN-focused results
