export function GenerationPanel() {
  return (
    <aside className="workspace-panel generation-panel">
      <div className="panel-header">
        <h2>생성 설정</h2>
        <p>이미지 생성 조건을 설정합니다.</p>
      </div>

      <label className="form-field">
        <span>프롬프트</span>
        <textarea
          placeholder="생성할 게임 에셋의 모습을 입력하세요."
          rows={6}
        />
      </label>

      <label className="form-field">
        <span>스타일</span>
        <select defaultValue="pixel">
          <option value="pixel">픽셀 아트</option>
          <option value="illustration">일러스트</option>
          <option value="three-dimensional">3D</option>
        </select>
      </label>

      <label className="form-field">
        <span>화면 비율</span>
        <select defaultValue="1:1">
          <option value="1:1">1:1</option>
          <option value="4:3">4:3</option>
          <option value="16:9">16:9</option>
        </select>
      </label>

      <button className="generate-button" type="button" disabled>
        이미지 생성
      </button>

      <p className="helper-text">
        생성 기능은 이후 단계에서 연결할 예정입니다.
      </p>
    </aside>
  );
}