/**
 * Observe node in DOM, add class when DOM property is
 * inserting viewport.
 * @param  {HTMLDivElement} observeTarget DOM node to observe.
 * @param  {String} style CSS class to apply to target.
 * @param  {HTMLDivElement} target Dom node to add CSS class
 * @param  {Number} threshold Number between 0.0 & 1.0
 */
export function createObserver({ observeTarget, target, style, threshold }) {
  const observer = new IntersectionObserver(
    (entry) => {
      target.classList.toggle(style, entry[0].isIntersecting)
    },
    { threshold },
  )
  observer.observe(observeTarget)
}
