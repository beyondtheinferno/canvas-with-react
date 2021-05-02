# canvas-with-react

Experimenting with react + d3 + canvas to handle visualisations with high number of DOM nodes.

### What made me get into this?
1. When the SVG nodes are high, the animation is neigh.
2. Lots of DOM nodes, lighthouse starts to complain
3. Heavy load on performance
4. JS animation libraries performance is better only on high end devices. Better with CSS animations, but still lag / stutters in mobile devices.

### Things to look out for
1. Event handler for the elements inside canvas, only came across hacks till now. Major red flag if not possible.
2. Sharpness of canvas on low DPI / high DPI / mobile devices
3. Declarativeness of the code? Was possible for SVG + D3 + React.

### To Dos
- [x] Base canvas template (with pixel accuracy for high DPI devices)
- [ ] Static line area chart with axes
- [ ] Static cluster chart (nodes < 50)
- [ ] Static cluster chart (nodex > 2000)
- [ ] Animation of cluster chart (nodes < 50)
- [ ] Animation of cluster chart (nodex > 2000)
- [ ] Research how to handle onClick events for individual nodes
