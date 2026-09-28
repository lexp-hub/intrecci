import Matter from 'matter-js';
import soundManager from './audio';

const { Engine, Composite, Bodies, Mouse, MouseConstraint } = Matter;

let activeEngine = null;
let animFrameId = null;
let managedElements = [];
let mouseConstraintInstance = null;

export const isGravityActive = () => {
  return activeEngine !== null;
};

export const startGoogleGravity = (onRestoreCallback) => {
  if (activeEngine) return;

  // Sound effect
  soundManager.playGravityDrop();

  // 1. Target candidate elements to fall
  const selectors = [
    '.tile-btn',
    '.binomi-tile',
    '.featured-puzzle-card',
    '.menu-card-btn',
    '.menu-hero-left',
    '.menu-hero-stats',
    '.menu-footer',
    '.controls-bar > button',
    '.attempts-row-container',
    '.instruction-text',
    '.level-banner',
    '.header-title-link',
    '.header-actions button',
    '.saga-top-bar > *',
    '.saga-node-wrapper',
    '.biome-marker-banner',
    '.binomi-header > *',
    '.binomi-pair-card',
    '.binomi-instruction-box',
    '.binomi-footer-actions > button',
    '.revealed-hints-banner'
  ];

  const rawElements = Array.from(document.querySelectorAll(selectors.join(', ')));
  
  // Filter only visible elements not already enclosed in a falling parent
  const filtered = [];
  for (const el of rawElements) {
    if (el.classList.contains('gravity-immune') || el.closest('.gravity-immune') || el.closest('.modal-backdrop')) {
      continue;
    }
    const rect = el.getBoundingClientRect();
    if (rect.width > 20 && rect.height > 15 && el.offsetParent !== null) {
      // Check if a parent is already in the list
      const parentAlreadyIn = filtered.some(p => p.contains(el));
      if (!parentAlreadyIn) {
        filtered.push(el);
      }
    }
  }

  if (filtered.length === 0) return;

  // 2. Initialize Matter.js Physics Engine
  const engine = Engine.create({
    enableSleeping: false
  });
  engine.world.gravity.y = 1.3;
  engine.world.gravity.x = 0;

  activeEngine = engine;
  managedElements = [];

  const bodies = [];
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // 3. Convert DOM Elements into Rigid Bodies
  filtered.forEach(el => {
    const rect = el.getBoundingClientRect();

    // Store original styles to restore later
    const origStyle = {
      position: el.style.position || '',
      left: el.style.left || '',
      top: el.style.top || '',
      width: el.style.width || '',
      height: el.style.height || '',
      margin: el.style.margin || '',
      transform: el.style.transform || '',
      transition: el.style.transition || '',
      zIndex: el.style.zIndex || '',
      boxSizing: el.style.boxSizing || '',
      cursor: el.style.cursor || '',
      userSelect: el.style.userSelect || ''
    };

    // Apply fixed coordinates before taking off
    el.style.position = 'fixed';
    el.style.left = `${rect.left}px`;
    el.style.top = `${rect.top}px`;
    el.style.width = `${rect.width}px`;
    el.style.height = `${rect.height}px`;
    el.style.margin = '0';
    el.style.boxSizing = 'border-box';
    el.style.zIndex = '9990';
    el.style.transition = 'none';
    el.style.cursor = 'grab';
    el.style.userSelect = 'none';

    // Create rigid body with bouncy restitution
    const body = Bodies.rectangle(
      rect.left + rect.width / 2,
      rect.top + rect.height / 2,
      rect.width,
      rect.height,
      {
        restitution: 0.68, // Nice bouncy trampoline feel
        friction: 0.25,
        frictionAir: 0.012,
        density: 0.002
      }
    );

    // Initial gentle random kick so elements tumble naturally
    Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.12);
    Matter.Body.setVelocity(body, {
      x: (Math.random() - 0.5) * 4,
      y: Math.random() * -2
    });

    body.domElement = el;
    body.initWidth = rect.width;
    body.initHeight = rect.height;

    bodies.push(body);
    managedElements.push({ element: el, origStyle });
  });

  // 4. Create Boundaries (Floor, Left, Right Walls)
  const floor = Bodies.rectangle(
    screenWidth / 2,
    screenHeight + 30,
    screenWidth * 4,
    70,
    { isStatic: true, friction: 0.4 }
  );

  const leftWall = Bodies.rectangle(
    -35,
    screenHeight / 2,
    70,
    screenHeight * 4,
    { isStatic: true }
  );

  const rightWall = Bodies.rectangle(
    screenWidth + 35,
    screenHeight / 2,
    70,
    screenHeight * 4,
    { isStatic: true }
  );

  Composite.add(engine.world, [...bodies, floor, leftWall, rightWall]);

  // 5. Mouse & Touch Dragging Constraint
  const mouse = Mouse.create(document.body);
  // Remove default mousewheel listeners that interfere with page
  mouse.element.removeEventListener('mousewheel', mouse.mousewheel);
  mouse.element.removeEventListener('DOMMouseScroll', mouse.mousewheel);

  mouseConstraintInstance = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.25,
      render: { visible: false }
    }
  });

  Composite.add(engine.world, mouseConstraintInstance);

  // Prevent scroll during gravity chaos
  document.body.style.overflow = 'hidden';

  // 6. Physics Step Loop
  const loop = () => {
    Engine.update(engine, 1000 / 60);

    for (const body of bodies) {
      if (body.domElement) {
        const x = body.position.x - body.initWidth / 2;
        const y = body.position.y - body.initHeight / 2;
        const angle = body.angle;
        body.domElement.style.left = `${x}px`;
        body.domElement.style.top = `${y}px`;
        body.domElement.style.transform = `rotate(${angle}rad)`;
      }
    }

    animFrameId = requestAnimationFrame(loop);
  };

  animFrameId = requestAnimationFrame(loop);
};

export const stopGoogleGravity = () => {
  if (!activeEngine) return;

  // Cancel loop
  if (animFrameId) {
    cancelAnimationFrame(animFrameId);
    animFrameId = null;
  }

  // Restore elements original styles
  managedElements.forEach(({ element, origStyle }) => {
    element.style.position = origStyle.position;
    element.style.left = origStyle.left;
    element.style.top = origStyle.top;
    element.style.width = origStyle.width;
    element.style.height = origStyle.height;
    element.style.margin = origStyle.margin;
    element.style.transform = origStyle.transform;
    element.style.transition = origStyle.transition;
    element.style.zIndex = origStyle.zIndex;
    element.style.boxSizing = origStyle.boxSizing;
    element.style.cursor = origStyle.cursor;
    element.style.userSelect = origStyle.userSelect;
  });

  managedElements = [];

  // Clear Matter.js world & engine
  Composite.clear(activeEngine.world);
  Engine.clear(activeEngine);
  activeEngine = null;
  mouseConstraintInstance = null;

  document.body.style.overflow = '';
};
