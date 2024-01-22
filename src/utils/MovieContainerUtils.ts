import { SetState } from "./types";

export const handleScroll = (
    containerRef: React.RefObject<HTMLDivElement>,
    scrollPosition: number,
    setScrollPosition: SetState<number>,
    direction: "left" | "right"
) => {
    const step = 500;
    const container = containerRef.current!;
    const maxScroll = container.scrollWidth - container.clientWidth;

    let newScrollLeft;

    if (direction === "left") {
        newScrollLeft = scrollPosition - step;
        if (newScrollLeft < 0) {
            newScrollLeft = maxScroll;
        }
    } else {
        newScrollLeft = scrollPosition + step;
        if (newScrollLeft > maxScroll) {
            newScrollLeft = 0;
        }
    }

    container.scrollLeft = newScrollLeft;
    setScrollPosition(newScrollLeft);
};
