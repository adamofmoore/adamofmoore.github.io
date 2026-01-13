// styles/animations.ts
import { keyframes } from "styled-components";

// Define the fade-in and move-up animation
export const fadeInMoveUp = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0,25%,0);
  }


  100% {
    opacity: 1;
    transform: translate3d(0,0,0);
  }
`;

// Define the flicker animation
export const flicker = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

// Radom flicker
export const randomFlicker = keyframes`
  0%, 19.999%, 100% {
    opacity: 1;
  }
  20%, 39.999% {
    opacity: 0.6;
  }
  40%, 59.999% {
    opacity: 0.8;
  }
  60%, 79.999% {
    opacity: 0.4;
  }
  80%, 99.999% {
    opacity: 0.2;
  }
  25%, 55%, 85% {
    opacity: 0.7;
  }
`;

// Combine the animations into a single keyframes definition
export const combinedAnimation = keyframes`
  0%, 5%, 100% {
    opacity: 1;
    transform: translateY(0);
  }
  2.5% {
    opacity: 0.5;
    transform: translateY(-5px);
  }
`;
