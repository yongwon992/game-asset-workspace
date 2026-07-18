export function AssetSidebar() {
  return (
    <aside className="workspace-panel asset-sidebar">
      <div className="panel-header">
        <h2>에셋 목록</h2>
        <p>작업할 이미지 에셋을 관리합니다.</p>
      </div>

      <button className="upload-placeholder" type="button">
        이미지 업로드
      </button>

      <div className="empty-message">
        아직 등록된 이미지가 없습니다.
      </div>
    </aside>
  );
}