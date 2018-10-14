import jsdom from "jsdom";
import { Card } from "./card";
import { text, altText } from "./selector";

const { JSDOM } = jsdom;

const scrapeFriends = (html: string): Card => {
  const dom = new JSDOM(html);
  const doc = dom.window.document;

  const t = text(doc, ".dress-detail-title > p");
  const id = t.split(" ")[1]; // SPR S6-38

  // レアリティー "スタープレミアムレア<br>★★★★"
  const rarity = text(doc, ".dress-detail-data .reality dd");
  const rarityMatches = rarity.match(/^([^★]+)\s*(★+)/)!;

  return {
    id,
    name: text(doc, ".dress-detail-title > h4"),
    type: altText(doc, ".dress-detail-data .type img") as Card["type"],
    category: text(doc, ".dress-detail-data .category dd") as Card["category"],
    brand: altText(doc, ".dress-detail-data .brand img"),
    appealPoint: Number(text(doc, ".dress-detail-data .appealpoint dd")),
    rarity: rarityMatches[1],
    rarityLevel: rarityMatches[2].length
  };
};
export default scrapeFriends;
