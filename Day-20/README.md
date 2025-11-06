# Day 20 of ReactJs 
### Basic Responsive UI

##### What is Responsive UI?
- Responsive UI adapts layouts, spacing, and sizing for different screen widths.

- Uses media queries (@media) in CSS to set rules at various breakpoints (e.g. 600px, 1024px).

- Can be used in global/external styles or CSS Modules.


#### Recommended Approaches:

- External CSS/CSS Modules: Most common and scalable

- Styled-components/Emotion: Inline CSS-in-JS with media query helpers (optional)

- Responsive Units: Use %, vw, vh, and rem instead of px for flexible sizing

- Assume you are using CSS Modules (recommended for TypeScript) ProductGrid.module.css

#### Practice
- Test on multiple devices: Open DevTools and use Device Toolbar to check rendering on iPhone, iPad, desktop, etc.

- Add responsive navigation: Hide/show menu items on mobile.

- Add touch-friendly buttons: Increase hit area for mobile (min-width: 40px).

- Try dark mode toggle: Use responsive styles for light/dark mode.

- Challenge: Use grid/flex for a responsive header/footer.

Tips for Responsive UI
- Always design mobile first: Start with narrow screens, add features for wider screens.

- Breakpoints: Common values are 480px, 768px, 1024px, 1200px.

- Use DevTools to simulate real devices.

- Responsive typography: Use clamp(), rem, or % for font sizes.
