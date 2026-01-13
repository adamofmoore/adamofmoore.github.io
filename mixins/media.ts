import { css } from "styled-components";
import { breakpoints } from "../hooks/useBreakpoints";

export const media = {
    // min-width queries
    mobileLandscape: (literals: TemplateStringsArray, ...args: any[]) => css`
        @media screen and (min-width: ${breakpoints.mobileLandscape}px) {
            ${css(literals, ...args)};
        }
    `,
    tablet: (literals: TemplateStringsArray, ...args: any[]) => css`
        @media screen and (min-width: ${breakpoints.tablet}px) {
            ${css(literals, ...args)};
        }
    `,
    tabletLarge: (literals: TemplateStringsArray, ...args: any[]) => css`
        @media screen and (min-width: ${breakpoints.tabletLarge}px) {
            ${css(literals, ...args)};
        }
    `,
    desktop: (literals: TemplateStringsArray, ...args: any[]) => css`
        @media screen and (min-width: ${breakpoints.desktop}px) {
            ${css(literals, ...args)};
        }
    `,
    desktopLargeLegacy: (literals: TemplateStringsArray, ...args: any[]) => css`
        @media screen and (min-width: ${breakpoints.desktopLargeLegacy}px) {
            ${css(literals, ...args)};
        }
    `,
    desktopLarge: (literals: TemplateStringsArray, ...args: any[]) => css`
        @media screen and (min-width: ${breakpoints.desktopLarge}px) {
            ${css(literals, ...args)};
        }
    `,
    desktopExtraLarge: (literals: TemplateStringsArray, ...args: any[]) => css`
        @media screen and (min-width: ${breakpoints.desktopExtraLarge}px) {
            ${css(literals, ...args)};
        }
    `,

    // max-width queries
    mobileLandscapeMax: (literals: TemplateStringsArray, ...args: any[]) => css`
        @media screen and (max-width: ${breakpoints.mobileLandscape}px) {
            ${css(literals, ...args)};
        }
    `,
    tabletMax: (literals: TemplateStringsArray, ...args: any[]) => css`
        @media screen and (max-width: ${breakpoints.tablet}px) {
            ${css(literals, ...args)};
        }
    `,
    tabletLargeMax: (literals: TemplateStringsArray, ...args: any[]) => css`
        @media screen and (max-width: ${breakpoints.tabletLarge}px) {
            ${css(literals, ...args)};
        }
    `,
    desktopMax: (literals: TemplateStringsArray, ...args: any[]) => css`
        @media screen and (max-width: ${breakpoints.desktop}px) {
            ${css(literals, ...args)};
        }
    `,
    desktopLargeLegacyMax: (literals: TemplateStringsArray, ...args: any[]) => css`
        @media screen and (max-width: ${breakpoints.desktopLargeLegacy}px) {
            ${css(literals, ...args)};
        }
    `,
    desktopLargeMax: (literals: TemplateStringsArray, ...args: any[]) => css`
        @media screen and (max-width: ${breakpoints.desktopLarge}px) {
            ${css(literals, ...args)};
        }
    `,
    desktopExtraLargeMax: (literals: TemplateStringsArray, ...args: any[]) => css`
        @media screen and (max-width: ${breakpoints.desktopExtraLarge}px) {
            ${css(literals, ...args)};
        }
    `,

    // retina
    retina: (literals: TemplateStringsArray, ...args: any[]) => css`
        @media screen and (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            ${css(literals, ...args)};
        }
    `,
};
