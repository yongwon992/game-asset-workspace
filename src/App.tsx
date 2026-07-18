import "./App.css";
import { AssetSidebar } from "./components/layout/AssetSidebar";
import { CanvasWorkspace } from "./components/layout/CanvasWorkspace";
import { GenerationPanel } from "./components/layout/GenerationPanel";

function App() {
  return (
    <main className="workspace">
      <AssetSidebar />
      <CanvasWorkspace />
      <GenerationPanel />
    </main>
  );
}

export default App;