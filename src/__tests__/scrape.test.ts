import "jest";
import fs from "fs";
import assert from "assert";

import scrape from "../scrape";

describe("scrape", () => {
  const html = fs.readFileSync(__dirname + "/f3-109.html").toString();
  test("id", () => {
    const card = scrape(html);
    assert(card.id === "F3-109");
  });

  test("name", () => {
    const card = scrape(html);
    assert(card.name === "スイートライムライトトップス");
  });

  test("type", () => {
    const card = scrape(html);
    assert(card.type === "ポップ");
  });

  test("category", () => {
    const card = scrape(html);
    assert(card.category === "トップス");
  });

  test("brand", () => {
    const card = scrape(html);
    assert(card.brand === "フワフワドリーム");
  });

  test("appealPoint", () => {
    const card = scrape(html);
    assert(card.appealPoint === 900);
  });

  test("rarity", () => {
    const card = scrape(html);
    assert(card.rarity === "プレミアムレア");
  });

  test("rarityLevel", () => {
    const card = scrape(html);
    assert(card.rarityLevel === 3);
  });
});
