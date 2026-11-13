import anime from "animejs";

export function animateFadeIn(element: HTMLElement | null, delay = 0) {
  if (!element) return;
  anime({
    targets: element,
    opacity: [0, 1],
    translateY: [16, 0],
    easing: "easeOutCubic",
    duration: 600,
    delay,
  });
}

export function animateScaleIn(element: HTMLElement | null, delay = 0) {
  if (!element) return;
  anime({
    targets: element,
    opacity: [0, 1],
    scale: [0.94, 1],
    easing: "easeOutExpo",
    duration: 500,
    delay,
  });
}

export function animateStaggerCards(containerSelector: string) {
  anime({
    targets: `${containerSelector} > *`,
    opacity: [0, 1],
    translateY: [24, 0],
    easing: "easeOutQuad",
    duration: 500,
    delay: anime.stagger(80),
  });
}

export function animateFloatingBadge(element: HTMLElement | null) {
  if (!element) return;
  anime({
    targets: element,
    translateY: [-3, 3],
    direction: "alternate",
    loop: true,
    easing: "easeInOutSine",
    duration: 2500,
  });
}
