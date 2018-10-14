import "jest";
import fs from "fs";
import assert from "assert";

import scrapeFriends from "../scrape-friends";

describe("scrapeFriends", () => {
  const html = fs.readFileSync(__dirname + "/f3-109.html").toString();
  test("id", () => {
    const card = scrapeFriends(html);
    assert(card.id === "F3-109");
  });

  test("name", () => {
    const card = scrapeFriends(html);
    assert(card.name === "スイートライムライトトップス");
  });

  test("type", () => {
    const card = scrapeFriends(html);
    assert(card.type === "ポップ");
  });

  test("category", () => {
    const card = scrapeFriends(html);
    assert(card.category === "トップス");
  });

  test("brand", () => {
    const card = scrapeFriends(html);
    assert(card.brand === "フワフワドリーム");
  });

  test("appealPoint", () => {
    const card = scrapeFriends(html);
    assert(card.appealPoint === 900);
  });

  test("rarity", () => {
    const card = scrapeFriends(html);
    assert(card.rarity === "プレミアムレア");
  });

  test("rarityLevel", () => {
    const card = scrapeFriends(html);
    assert(card.rarityLevel === 3);
  });
});
