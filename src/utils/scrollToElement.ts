export const scrollToElement = (
  event: MouseEvent & { currentTarget: HTMLAnchorElement }
) => {
  event.preventDefault();

  const href = event.currentTarget.getAttribute("href");
  if (!href) return;

  const element = document.querySelector(href);
  element?.scrollIntoView({ behavior: "smooth" });
};
