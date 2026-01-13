import { useEffect, useState } from "react";
import { useWindowDimensions } from "./useWindowDimensions";

export const breakpoints = {
    mobileTiny: 370, // max-width
    mobileLandscape: 480, // max-width
    mobile: 768, // max-width
    tablet: 768,
    tabletLarge: 958,
    desktop: 992,
    desktopLargeLegacy: 1182, // product site
    desktopLarge: 1200,
    desktopExtraLarge: 1400,
};

export const useBreakpoints = () => {
    const { innerWidth } = useWindowDimensions();
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    // During SSR and before hydration, assume mobile to prevent hydration mismatches
    const width = !isHydrated ? breakpoints.mobile - 1 : innerWidth;

    return {
        isMobileTiny: width < breakpoints.mobileTiny, // max-width
        isMobile: width < breakpoints.mobile, // max-width
        isMobileLandscape: width < breakpoints.mobileLandscape, // max-width
        isTablet: width >= breakpoints.tablet,
        isTabletLarge: width >= breakpoints.tabletLarge,
        isDesktop: width >= breakpoints.desktop,
        isDesktopLargeLegacy: width >= breakpoints.desktopLargeLegacy, // product site
        isDesktopLarge: width >= breakpoints.desktopLarge,
        isDesktopExtraLarge: width >= breakpoints.desktopExtraLarge,
    };
};
