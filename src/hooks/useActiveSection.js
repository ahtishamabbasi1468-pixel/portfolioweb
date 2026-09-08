import { useEffect, useState } from 'react';

/**
 * Tracks which section id is currently most visible in the viewport,
 * so the navbar can highlight the matching link while scrolling.
 */
const useActiveSection = (sectionIds = []) => {
    const [activeId, setActiveId] = useState(sectionIds[0] || '');

    useEffect(() => {
        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        if (sections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visible.length > 0) {
                    setActiveId(visible[0].target.id);
                }
            },
            { rootMargin: '-30% 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sectionIds.join(',')]);

    return activeId;
};

export default useActiveSection;
