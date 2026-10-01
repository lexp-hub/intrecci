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

  soundManager.playGravityDrop();

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
  
  const filtered = [];
  for (const el of rawElements) {
    if (el.classList.contains('gravity-immune') || el.closest('.gravity-immune') || el.closest('.modal-backdrop')) {
      continue;
    }
    const rect = el.getBoundingClientRect();
    if (rect.width > 20 && rect.height > 15 && el.offsetParent !== null) {
      const parentAlreadyIn = filtered.some(p => p.contains(el));
      if (!parentAlreadyIn) {
        filtered.push(el);
      }
    }
  }

  if (filtered.length === 0) return;

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

  filtered.forEach(el => {
    const rect = el.getBoundingClientRect();

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

    const body = Bodies.rectangle(
      rect.left + rect.width / 2,
      rect.top + rect.height / 2,
      rect.width,
      rect.height,
      {
        restitution: 0.68, 
        friction: 0.25,
        frictionAir: 0.012,
        density: 0.002
      }
    );

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

  const mouse = Mouse.create(document.body);
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

  document.body.style.overflow = 'hidden';

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

  if (animFrameId) {
    cancelAnimationFrame(animFrameId);
    animFrameId = null;
  }

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

  Composite.clear(activeEngine.world);
  Engine.clear(activeEngine);
  activeEngine = null;
  mouseConstraintInstance = null;

  document.body.style.overflow = '';
};
