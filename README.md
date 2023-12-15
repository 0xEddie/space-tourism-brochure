# Space Tourism Website

This is a solution to the space tourism website [challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3), which provides image assets and a style guide in a [Figma file](https://www.figma.com/file/fEvMwK3DALNy5ZiVsY562l/space-tourism-website?node-id=0%3A1&t=uABUmUEvdYazx7ky-1).
There are no guidelines in the challenge for which technologies to use.

Live demo: https://space-tourism-brochure.vercel.app/

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
4. Style static components.
5. Plan component and routing architecture using Excalidraw.

6. Write JSX components for base page layout and navbar.
7. Style homepage and navbar, using CSS grid for element layout.
8. Write components, layout, style for Destination page.
9. Set up React Router for interpage navigation.
10. Intrapage tab navigation (with keyboard nav implemented).
11. Using Destination page as a basic guide, fill out Crew and Technology pages.

### What I Learned

1.  Easy way to create a button or link that:

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
This is simple, but it can work. I decided against it as I started to build out the site because was annoying to scroll through (which is a hint that something can be improved) and cognitively fatiguing to debug.

<!-- `TODO sample of keeping page styles together?` -->

If you are using Tailwind CSS, in the tailwind.config you can specify background images per url path.

I decided to create CSS files per each page's component, but still keep commonly used components (and utility classes, and base styles) together in index.css

![Page styles](/src/assets/page-styles.png)

4. Using the picture tag to use newer and better image formats (like .webp), while allowing the browser to fallback to older formats if the newer formats are unsupported (like .jpg or .png).

```jsx
<picture srcSet="/src/assets/crew/image-douglas-hurley.webp" type="image/webp">
	<img src="/src/assets/crew/image-douglas-hurley.png" alt="Douglas Hurley" />
</picture>
```

5.  Strategies for loading dynamic page content

i. Individual files for each page

    + Extremely simple to implement, minimal JavaScript needed.
    - Hard to maintain and extend - lots of duplicate markup. If new content on any page is added or changed, it is much more work to update the website than just adding/modifying an entry to the CMS (Content Management System) or data.json file.

ii. Write all content in elements for each page, then hide and unhide the relevant elements using JS as needed.

    + Simple to implement.
    - Bad for performance.
    - Still hard to maintain and extend for the same reasons as in the previous approach.

iii. Query the CMS (or in the case of this simple web app, the data.json) for the relevant content.

    + Most scalable and maintainable approach.
    - Extra complexity to set up and hook into a CMS.

After laying out and styling the content on each page, I decided to use queries to the data.json to dynamically load in content. For a simple static site like this, any of the approaches could be appropriate, I just wanted to practice something a little harder but more extendable.

6. Patterns for changing feature image source based on media queries

In the design specification the feature images on the Technology page need to change based on the window size.

Desktop image uncropped:

![uncropped image](/src/assets/img-portrait.png)

Tablet image cropped:

![cropped image 1](/src/assets/img-landscape-1.png)

Phone image cropped:

![cropped image 2](/src/assets/img-landscape-2.png)

I brainstormed three different implementation patterns:

i. Google says [write custom hooks for media queries](https://upmostly.com/tutorials/how-to-use-media-queries-in-react) then point `img src` at a template string generated based on the numbered tab state and media query.

```jsx
const [tabNumber, setTabNumber] = useState(1);
const query = useMediaQuery('desktop');
const imageClasses = {
  1: 'launch-vehicle',
  2: 'spaceport',
  3: 'space-capsule',
};
let imgUrl = `/src/assets/technology/image-${tabTitle}-${query}.jpg`;
...

<img src={imgUrl} alt={technology[tabNumber - 1].name} />
```

ii. Give img a className based on a dictionary with keys of the numbered tab state, then load images in CSS by using the `content` attr and media queries

```jsx
const imageClasses = {
	1: 'img-launch',
	2: 'img-port',
	3: 'img-capsule',
};
...

<img
	className={imageClasses[tabNumber]}
	alt={technology[tabNumber - 1].name}
/>;
```

```css
.img-launch {
	content: url('/src/assets/technology/image-launch-vehicle-landscape.jpg');
}
@media (min-width: 45em) {
	.img-launch {
		content: url('/src/assets/technology/image-launch-vehicle-portrait.jpg');
	}
}
```

iii. Another option would be to only use the larger uncropped images, but using the media query hook created in (i.) the image could be cropped and resized.

I decided to go for the second option as this is the least amount of work to implement. In terms of performance the first option might be the better pattern since you save a render. On this small site it is negligible, but at larger scale this would be one path to investigate for extra performance.

7. Importing images to display in React

Complex JavaScript web apps use bundlers to "build" the app so that it is able to be deployed and run in a browser. If using a build tool like webpack ([Vite uses Rollup](https://vitejs.dev/guide/why.html#why-not-bundle-with-esbuild) to bundle during build), then one step of bundling is processing all imported assets in each React component.

For example, instead of explicitly specifying the path to an image file in the JSX of a component (like `<img src="../assets/logo.svg" alt="logo" />`), assets (generally) need to be explicitly imported in the first lines of a component, and then the imported asset can then be referenced by JSX.

```jsx
import { Logo } from '../assets/logo.svg';

export function Header() {
	...

	return (
		<main>
			<img src={Logo} alt='logo' />
			...
		</main>
	)
}
```

[More details](https://levelup.gitconnected.com/display-images-in-react-8ff1f5b1cf9a)

### Continued Development

- Utility classes are nontrivial to set up, but the benefit is obvious for maintainable cohesive design. I think [Tailwind CSS](https://tailwindcss.com/) could allow for much faster design iteration and would be worth looking into.

- Refactor site from CSR to SSG

  - This is a Client Side Rendered (CSR) React app. They are the simplest to set up, but are Not Great in terms of performance (due to the rendering time on the client's browser) and are bad for Search Engine Optimization (SEO). CSR apps are bad for SEO because search engine crawlers can only initially see the config `index.html` file and have to wait for React to render.
  - Since this website only contains static, unchanging pages (no user or dynamic information is fetched and displayed), that means this could be refactored to be a Static Site Generated (SSG) application. SSG apps are more performant and better for SEO since they are just static pages rendered at build time. Static sites are also cheaper to host.
  - There is a [Vite plugin](https://vite-plugin-ssr.com/pre-rendering) which allows for easy SSG and would be an excellent next step for development.

- Set up and hook into a CMS (Content Management System) such as [Sanity](https://www.sanity.io/) for site content, instead of querying a data.json file. Using a CMS is often best for easily scaling and managing content that changes over time for a web app.
  - Optionally: Use the npm package `localforage` to create a fake interface to a CMS [like in this React Router example](https://gist.githubusercontent.com/ryanflorence/1e7f5d3344c0db4a8394292c157cd305/raw/f7ff21e9ae7ffd55bfaaaf320e09c6a08a8a6611/contacts.js). This would be a good step for a learning project without worrying about database setup.

- Lazy loading images [useful guide](https://imagekit.io/blog/lazy-loading-images-complete-guide/)
  - For pages with tabs with multiple images, all the images are downloaded by default on page load. Lazy loading allows for images to be downloaded and shown *only when the user makes them visible on screen*. This saves bandwidth costs and improves initial page load.

- Serve appropriate image size using `srcset`
  - Instead of using multiple CSS media queries, the `srcset` HTML attribute allows the developer to define multiple image formats that can be served. [Mozilla documentation](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images). Not sure if this is better or worse than using media queries.

### Useful Resources

- [Reduce rendering load of animated box shadows by 10x](https://tobiasahlin.com/blog/how-to-animate-box-shadow/) - Using transform on an element's box-shadow is _extremely_ compute intensive. Using transform on that element's `::after` psuedoelement instead (to create a hover outline effect) is better practice.

## Author

- Twitter - [@0x_eddie](https://www.twitter.com/0x_eddie)

## Local Development Setup

`TODO`
