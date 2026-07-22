import { useState } from "react";
import "./App.css";

import { AppHeader } from "./components/layout/AppHeader";
import { AssetSidebar } from "./components/layout/AssetSidebar";
import { CanvasWorkspace } from "./components/layout/CanvasWorkspace";
import { GenerationPanel } from "./components/layout/GenerationPanel";

import { mockAssets } from "./mocks/mockAssets";
import type { AssetItem } from "./types/asset";

function App() {
  const [selectedAsset, setSelectedAsset] =
    useState<AssetItem | null>(mockAssets[0] ?? null);

  return (
    <div className="app">
      <AppHeader />

      <main className="workspace">
        <AssetSidebar
          assets={mockAssets}
          selectedAssetId={selectedAsset?.id ?? null}
          onSelectAsset={setSelectedAsset}
        />

        <CanvasWorkspace selectedAsset={selectedAsset} />

        <GenerationPanel />
      </main>
    </div>
  );
}

export default App;