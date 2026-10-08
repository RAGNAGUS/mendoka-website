// v-reveal: fades an element up the first time it scrolls into view.
// v-reveal="120" adds a 120 ms delay (for staggering cards).
const observer =
  typeof IntersectionObserver !== "undefined"
    ? new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          }
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
      )
    : null;

export default {
  mounted(el, binding) {
    el.classList.add("reveal");
    if (binding.value) el.style.setProperty("--delay", `${binding.value}ms`);
    if (observer) observer.observe(el);
    else el.classList.add("is-visible");
  },
  unmounted(el) {
    if (observer) observer.unobserve(el);
  },
};
