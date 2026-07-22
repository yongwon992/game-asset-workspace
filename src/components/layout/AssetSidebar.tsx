import type { AssetItem } from "../../types/asset";

interface AssetSidebarProps {
  assets: AssetItem[];
  selectedAssetId: string | null;
  onSelectAsset: (asset: AssetItem) => void;
}

export function AssetSidebar({
  assets,
  selectedAssetId,
  onSelectAsset,
}: AssetSidebarProps) {
  return (
    <aside className="asset-sidebar">
    <div className="asset-sidebar-header">
      <h2>Assets</h2>
      <span>{assets.length}</span>
    </div>

      <div className="asset-list">
        {assets.map((asset) => {
          const isSelected = selectedAssetId === asset.id;

          return (
            <button
              className={`asset-item ${isSelected ? "selected" : ""}`}
              type="button"
              key={asset.id}
              onClick={() => onSelectAsset(asset)}
            >
              <img
                className="asset-thumbnail"
                src={asset.imageUrl}
                alt={asset.name}
              />

              <div className="asset-item-info">
                <strong>{asset.name}</strong>
                <span>
                  {asset.width} × {asset.height}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
}