export interface Card {
  id: string;
  name: string;
  type: "キュート" | "クール" | "セクシー" | "ポップ";
  category: "トップス" | "ボトムス" | "シューズ" | "アクセサリー"; // ワンピースはなんだっけ
  brand: string;
  appealPoint: number;
  rarity: string; // TODO: ノーマル | レア | ...
  rarityLevel: number; // 1 - 3
}
