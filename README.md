# Space Tourism Website

This is a solution to the space tourism website [challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3), which provides image assets and a style guide in a [Figma file](https://www.figma.com/file/fEvMwK3DALNy5ZiVsY562l/space-tourism-website?node-id=0%3A1&t=uABUmUEvdYazx7ky-1).

Live demo:

## Table of Contents

- [Overview](#overview)
  - [Key Objectives](#key-objectives)
  - [Screenshots](#screenshots)
- [The Build](#the-build)
  - [Built With](#built-with)
  - [Development Process](#development-process)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)

## Overview

### Key Objectives

Users should be able to:

- View the optimal layout for each of the website's pages, depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshots

![](./screenshot.jpg)

## The Build

### Built With

- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

### Development Process

1. Examine design file, start planning HTML element architecture and CSS classes to create reusable styles.
2. Before adding any styles, start scaffolding content in JSX components.
3. Write out the base styles for your project, including general content styles, such as `font-family` and `font-size`.
4. Style static components, using CSS grid for element layout.

### What I Learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

Important code snippets:

```css
.proud-of-this-css {
  color: papayawhip;
}
```

```js
const proudOfThisFunc = () => {
  console.log("🎉");
};
```

### Continued Development

- Using ARIA properties to create accomadative accessible websites seems to be a very large topic.
- Utility classes are nontrivial to set up, but the benefit is obvious for maintainable cohesive design. I think [Tailwind CSS](https://tailwindcss.com/) could allow for much faster design iteration and would be worth looking into.

### Useful Resources

- [Reduce rendering load of animated box shadows by 10x](https://tobiasahlin.com/blog/how-to-animate-box-shadow/) - Using transform on an element's box-shadow is _extremely_ compute intensive. Using transform on that element's `::after` psuedoelement instead (to create a hover outline effect) is a significantly better practice.

## Author

- Twitter - [@0x_eddie](https://www.twitter.com/0x_eddie)
- Website -
