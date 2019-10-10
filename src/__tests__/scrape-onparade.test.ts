import "jest";
import fs from "fs";
import assert from "assert";

import scrapeOnparade from "../scrape-onparade";

describe("scrapeOnparade", () => {
  const html = fs.readFileSync(__dirname + "/oppr-48.html").toString();
  test("id", () => {
    const card = scrapeOnparade(html);
    assert(card.id === "OPPR-48");
  });

  test("name", () => {
    const card = scrapeOnparade(html);
    assert(card.name === "スイートライムライトカチューシャ");
  });

  test("type", () => {
    const card = scrapeOnparade(html);
    assert(card.type === "ポップ");
  });

  test("category", () => {
    const card = scrapeOnparade(html);
    assert(card.category === "アクセサリー");
  });

  test("brand", () => {
    const card = scrapeOnparade(html);
    assert(card.brand === "フワフワドリーム");
  });

  test("appealPoint", () => {
    const card = scrapeOnparade(html);
    assert(card.appealPoint === 500);
  });

  test("rarity", () => {
    const card = scrapeOnparade(html);
    assert(card.rarity === "プレミアムレア");
  });

  test("rarityLevel", () => {
    const card = scrapeOnparade(html);
    assert(card.rarityLevel === 3);
  });
});
