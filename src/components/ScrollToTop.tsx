import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (!hash) {
            window.scrollTo(0, 0);
        } else {
            // Remove leading # or ## to get the clean id
            const id = hash.replace(/^#+/, "");
            const element = document.getElementById(id);
            if (element) {
                // 100ms gives React enough time to render the page content if navigating from a different route
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        }
    }, [pathname, hash]);

    return null;
}
