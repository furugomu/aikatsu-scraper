import jsdom from "jsdom";
import { Card } from "./card";

const { JSDOM } = jsdom;

const select = (doc: Document, selector: string): Element => {
  const el = doc.querySelector(selector);
  if (!el) throw new Error("無い " + selector);
  return el;
};

const text = (doc: Document, selector: string): string => {
  const el = select(doc, selector);
  const s = el.textContent;
  if (!s) throw new Error("text が null " + selector);
  return s.replace(/^\s+|\s+$/g, "");
};

const altText = (doc: Document, selector: string): string => {
  const el = select(doc, selector);
  const s = el.getAttribute("alt");
  if (!s) throw new Error("alt が null " + selector);
  return s;
};

const scrapeFriends = (html: string): Card => {
  const dom = new JSDOM(html);
  const doc = dom.window.document;

  // 番号 "F3-109 PR"
  const cardNum = text(doc, ".cardNum");
  const id = cardNum.split(/\s+/)[0];

  // レアリティー "フレンズレア<br>★★"
  const rarity = text(doc, ".rarelityCol > dd");
  const rarityMatches = rarity.match(/^([^★]+)(★+)/);
  if (!rarityMatches) throw new Error("レアリティが変 " + rarity);

  return {
    id,
    name: text(doc, ".cardName"),
    type: altText(doc, ".typeCol img") as Card["type"],
    category: text(doc, ".attributeCol > dd") as Card["category"],
    brand: altText(doc, ".brandCol img"),
    appealPoint: Number(text(doc, ".appealPointCol > dd")),
    rarity: rarityMatches[1],
    rarityLevel: rarityMatches[2].length
  };
};
export default scrapeFriends;
