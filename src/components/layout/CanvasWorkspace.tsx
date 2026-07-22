import type { AssetItem } from "../../types/asset";

interface CanvasWorkspaceProps {
  selectedAsset: AssetItem | null;
}

export function CanvasWorkspace({
  selectedAsset,
}: CanvasWorkspaceProps) {
  return (
    <section className="canvas-workspace">
      <div className="canvas-toolbar">
        <div>
          <h2>Canvas</h2>

          {selectedAsset && (
            <span className="selected-asset-name">
              {selectedAsset.name}
            </span>
          )}
        </div>

        <span className="zoom-label">100%</span>
      </div>

      <div className="canvas-area">
        <div className="canvas-stage">
          {selectedAsset ? (
            <img
              className="canvas-asset"
              src={selectedAsset.imageUrl}
              alt={selectedAsset.name}
              style={{
                left: selectedAsset.x,
                top: selectedAsset.y,
                width: selectedAsset.width,
                height: selectedAsset.height,
              }}
            />
          ) : (
            <p className="canvas-empty-message">
              왼쪽 목록에서 에셋을 선택해 주세요.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}