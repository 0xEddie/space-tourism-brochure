# Space Tourism Website

This is a solution to the space tourism website [challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3), which provides image assets and a style guide in a [Figma file](https://www.figma.com/file/fEvMwK3DALNy5ZiVsY562l/space-tourism-website?node-id=0%3A1&t=uABUmUEvdYazx7ky-1).
There are no guidelines in the challenge for which technologies to use.

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
- [Local Development Setup](#local-development-setup)

## Overview

### Key Objectives

Users should be able to:

- View the optimal layout for each of the website's pages, depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

Additionally:

- Use semantic HTML and styling to aid context for accessibility
- Implement client side routing to allow responsive navigation between pages (prevents the hang time of requests to server for next page)

### Screenshots

#### React Router Component Architecture Draft

![React router component architecture](/src/assets/component-architecture-draft.png)

## The Build

### Built With

- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Front End Developer Tooling
- [React Router v6](https://reactrouter.com/en/main) - Client side page routing in React apps
- [Excalidraw](https://excalidraw.com) - Diagram drawing

### Development Process

1. Examine design file, start planning HTML element architecture and CSS classes to create reusable styles.
2. Before adding any styles, start scaffolding content in JSX components.
3. Write out the base styles for your project, including general content styles, such as `font-family` and `font-size`.
4. Style static components
5. Plan component and routing architecture using Excalidraw.

6. Write JSX components for base page layout and navbar.
7. Style homepage and navbar, using CSS grid for element layout.
8. Write components, layout, style for Destination page.
9. Set up React Router for interpage navigation
10. Intrapage tab navigation (with keyboard nav implemented).

### What I Learned

1. Easy way to create a button or link that:

- is circular
- has text centered within it

```css
.button-or-anchor {
	display: grid;
	place-items: center;
	padding: 0 2rem;
	border-radius: 50%;
	aspect-ratio: 1;
}
```

2. Simple addition to make keyboard navigation of the website easier, using an anchor tag that jumps to the main content of the site. The anchor tag is placed as the first element in the body, which makes it the first item focused when `TAB` is pressed.

```jsx
<a className="jump-to-content" href="#main">
	Skip to content
</a>
```

```css
.jump-to-content {
	position: absolute;
	z-index: 9999;
	background: hsl(var(--clr-white));
	color: hsl(var(--clr-dark));
	padding: 0.5em 1em;
	transform: translateY(-100%);
	transition: transform 100ms ease-in;
}

.jump-to-content:focus {
	transform: translateY(0);
}
```

3. CSS organization

One primitive strategy for organizing styling in an app is simply keeping everything in one big file.
This is simple, but it can work. I decided against it was annoying to scroll through, and because I would have then had to add a class to each page. That class would be used to specify the background image relative url.

TODO sample of keeping page styles together?

If you are using Tailwind CSS, in the tailwind.config you can specify background images per url path.

I decided to create CSS files per each page's component, but still keep commonly used components (and utility classes, and base styles) together in index.css

![Page styles](/src/assets/page-styles.png)

4. Using the picture tag to use better image formats, while allowing the browser to fallback to older formats if the newer formats are unsupported.

```jsx
<picture srcSet="/src/assets/crew/image-douglas-hurley.webp" type="image/webp">
	<img src="/src/assets/crew/image-douglas-hurley.png" alt="Douglas Hurley" />
</picture>
```

5.  Strategies for loading dynamic page content

Option 1: Individual files for each page

    + Extremely simple to implement, minimal JavaScript needed.
    - Hard to maintain and extend - lots of duplicate markup. If new content on any page is added or changed, it is much more work to update the website than just adding/modifying an entry to the CMS (Content Management System) or data.json file.

Option 2: Write all content in elements for each page, then hide and unhide the relevant elements using JS as needed.

    + Simple to implement.
    - Bad for performance.
    - Still hard to maintain and extend for the same reasons as in the previous approach.

Option 3: Query the CMS (or in the case of this simple web app, the data.json) for the relevant content.

    + Most scalable and maintainable approach.
    - Extra complexity to set up and hook into a CMS.

After laying out and styling the content on each page, I decided to use queries to the data.json to dynamically load in content. For a simple static site like this, any of the approaches could be appropriate, I just wanted to practice something a little harder but more extendable.

### Continued Development

- Utility classes are nontrivial to set up, but the benefit is obvious for maintainable cohesive design. I think [Tailwind CSS](https://tailwindcss.com/) could allow for much faster design iteration and would be worth looking into.

- Refactor site from CSR to SSG

  - This is a Client Side Rendered (CSR) React app. They are the simplest to set up, but are Not Great in terms of performance (due to the rendering time on the client's browser) and are bad for Search Engine Optimization (SEO). CSR apps are bad for SEO because search engine crawlers can only initially see the config `index.html` file and have to wait for React to render.
  - Since this website only contains static, unchanging pages (no user or dynamic information is fetched and displayed), that means this could be refactored to be a Static Site Generated (SSG) application. SSG apps are more performant and better for SEO since they are just static pages rendered at build time. Static sites are also cheaper to host.
  - There is a [Vite plugin](https://vite-plugin-ssr.com/pre-rendering) which allows for easy SSG and would be an excellent next step for development.

- Set up and hook into a CMS (Content Management System) such as [Sanity](https://www.sanity.io/) for site content, instead of querying a data.json file. Using a CMS is often best for easily scaling and managing content for a web app.

### Useful Resources

- [Reduce rendering load of animated box shadows by 10x](https://tobiasahlin.com/blog/how-to-animate-box-shadow/) - Using transform on an element's box-shadow is _extremely_ compute intensive. Using transform on that element's `::after` psuedoelement instead (to create a hover outline effect) is better practice.

## Author

- Twitter - [@0x_eddie](https://www.twitter.com/0x_eddie)

## Local Development Setup

`TODO`
