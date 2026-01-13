import { useEffect, useState } from "react";
import { debounce } from "../globals/utils";

interface IWindowDimensions {
    innerWidth: number;
    innerHeight: number;
    outerWidth: number;
    outerHeight: number;
}

const getWindowDimensions = (): IWindowDimensions => {
    if (typeof window === "undefined") {
        return { innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 };
    }
    const { innerWidth, innerHeight, outerWidth, outerHeight } = window;
    return { innerWidth, innerHeight, outerWidth, outerHeight };
};

export const useWindowDimensions = (): IWindowDimensions => {
    const [dimensions, setDimensions] = useState<IWindowDimensions>(() => getWindowDimensions());

    useEffect(() => {
        // Set initial dimensions on client side
        setDimensions(getWindowDimensions());

        const handleResize = debounce(() => setDimensions(getWindowDimensions), 16);

        if (typeof window !== "undefined") {
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    return dimensions;
};
