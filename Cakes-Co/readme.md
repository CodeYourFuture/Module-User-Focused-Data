# Cakes Co STRETCH

The objective of this exercise is to create a responsive webpage showcasing your imaginary cake business. You are not required to found an actual cake business, but cakes brought to class this week will be welcomed with joy.

## Learning Objectives

- Translate wireframe designs to a fully featured web page.
- Implement a responsive design using the Mobile First approach
- Adapt the page layout for larger screens using media queries
- Select appropriate fonts and color schemes to create an aesthetically pleasing design
- Use hover/focus effects to add interactivity to buttons and images

## Requirements

This project develops your skills in creating responsive webpages using the Mobile First approach. You are expected to have a basic understanding of HTML and CSS.

Start by implementing the mobile design in HTML and CSS. Then use media queries to adapt the layout for larger screens. Use `min-width` for your media queries and create three different variants of the layout using two different breakpoints.

Choose appropriate fonts and colors and find visually appealing cake pictures to replace the placeholders in the wireframes. You are encouraged to add hover/focus effects to buttons and images to enhance interactivity.

Make sure that all elements are visible and functional on both mobile and desktop devices.

## Acceptance Criteria

- [ ] The webpage is responsive and follows the Mobile First approach
- [ ] The layout adapts appropriately for larger screens using media queries
- [ ] Fonts and colors are selected appropriately and cake pictures are visually appealing
- [ ] The webpage includes hover effects to add interactivity
- [ ] All elements are visible and function as intended on both mobile and desktop devices according to the wireframes
- [ ] Your page scores 100 on Lighthouse Accessibility
- [ ] Your site is deployed to Netlify and the link is included in your PR message.

## Tips for success

When you're ready to start coding:

### Start with mobile

- Write the HTML following the mobile design
- Then write your CSS for everything to look great on mobile
- Remember to link your CSS file to your HTML file inside the `<head>` in `index.html`
- You don't need to use any media queries yet, because we're following a [Mobile First](https://www.invisionapp.com/inside-design/mobile-first-design/) approach!

### Then adapt the page for larger screens

- Now add media queries to your CSS, and change the layout and sizing of elements so they make better use of a wider screen (see the desktop wireframe design below).
- To follow Mobile First principles, we will only be using `min-width` in our media queries (no max-width!)
- You should **use 2 different breakpoints**, meaning you should have **3** different variants of your layout. Here's an example.

  If we have the following **2 breakpoints**:

  > - breakpoint 1 --> 540px
  > - breakpoint 2 --> 900px

  Then our CSS code will be split into **3**:

  > 1. **"default"**: default styles, should implement the mobile design (no media query used for these). These styles will apply to all screen sizes by default.
  > 2. **"medium"**: Our first media query `@media (min-width: 540px) {...}` **will overwrite our default styles** for screens at least 540px wide. Screens _below_ 540px will apply the styles from the "default".
  > 3. **"large"**: Our second media query `@media (min-width: 900px) {...}` **will overwrite our default AND medium styles** for screens at least 900px wide (no upper limit).

### Define your own style

- Choose 1-2 fonts to use (lots of [free fonts here](https://fonts.google.com/))
- Choose 2-3 colours that you think go together well, and try to limit yourself to those in your CSS ([look here at palettes](https://coolors.co/palettes/trending) for inspiration)
- Select some nice cake pictures to replace the placeholders in the wireframes (good [photo source here](https://unsplash.com/images/food/cake)).
- Get creative! Can you add some cool hover/focus effects to buttons and [images](https://www.wix.com/website-template/view/html/1911?siteId=c1c72d26-c040-41f2-80ce-0b0f8aef01b4&metaSiteId=5d77fab8-f068-4228-8b61-4181af054ca6&originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates&tpClick=view_button)?

### Also

- It's up to you to find a solution for any elements that are visible in desktop and not on mobile - and vice versa.
