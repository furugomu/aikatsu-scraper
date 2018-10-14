export const text = (doc: Document, selector: string): string => {
  const el = select(doc, selector);
  const s = el.textContent;
  if (!s) throw new Error("text が null " + selector);
  return s.replace(/^\s+|\s+$/g, "");
};

export const altText = (doc: Document, selector: string): string => {
  const el = select(doc, selector);
  const s = el.getAttribute("alt");
  if (!s) throw new Error("alt が null " + selector);
  return s;
};

const select = (doc: Document, selector: string): Element => {
  const el = doc.querySelector(selector);
  if (!el) throw new Error("無い " + selector);
  return el;
};
