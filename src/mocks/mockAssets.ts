import heroImage from "../assets/hero.png";
import type { AssetItem } from "../types/asset";

export const mockAssets: AssetItem[] = [
  {
    id: "asset-1",
    name: "Forest Hero",
    imageUrl: heroImage,
    x: 80,
    y: 60,
    width: 320,
    height: 240,
  },
  {
    id: "asset-2",
    name: "Fantasy Background",
    imageUrl: heroImage,
    x: 180,
    y: 120,
    width: 280,
    height: 210,
  },
  {
    id: "asset-3",
    name: "Character Preview",
    imageUrl: heroImage,
    x: 260,
    y: 160,
    width: 200,
    height: 200,
  },
];