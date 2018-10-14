import "jest";
import fs from "fs";
import assert from "assert";

import scrapeStars from "../scrape-stars";

describe("scrapeStars", () => {
  const html = fs.readFileSync(__dirname + "/s6-38.html").toString();

  test("id", () => {
    const card = scrapeStars(html);
    assert(card.id === "S6-38");
  });

  test("name", () => {
    const card = scrapeStars(html);
    assert(card.name === "エターナルスマイルドレス");
  });

  test("type", () => {
    const card = scrapeStars(html);
    assert(card.type === "ポップ");
  });

  test("category", () => {
    const card = scrapeStars(html);
    assert(card.category === "トップス＆ボトムス");
  });

  test("brand", () => {
    const card = scrapeStars(html);
    assert(card.brand === "シャイニースマイル");
  });

  test("appealPoint", () => {
    const card = scrapeStars(html);
    assert(card.appealPoint === 1650);
  });

  test("rarity", () => {
    const card = scrapeStars(html);
    assert(card.rarity === "スタープレミアムレア");
  });

  test("rarityLevel", () => {
    const card = scrapeStars(html);
    assert(card.rarityLevel === 4);
  });
});
