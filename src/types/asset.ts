export type GenerationStatus =
  | "idle"
  | "loading"
  | "success"
  | "error";

export type AssetStyle =
  | "pixel"
  | "illustration"
  | "three-dimensional";

export interface AssetItem {
  id: string;
  name: string;
  imageUrl: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface GenerationSettings {
  prompt: string;
  style: AssetStyle;
  aspectRatio: "1:1" | "4:3" | "16:9";
}

export interface GenerationResult {
  id: string;
  imageUrl: string;
  prompt: string;
  createdAt: string;
}