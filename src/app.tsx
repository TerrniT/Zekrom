import { Tooltip } from "@samuwrite/radix";
import { useState } from "react";
import { Doc } from "./types/doc/type";
import { Editor } from "./editor/type";
import "./font/font.css";
import { LayoutContainer } from "./layout/container";
import { Layout } from "./layout/type";
import { PromptProvider } from "./components/prompt/context";
import { useSettingsState } from "./settings/state";
import { Toolbar } from "./toolbar/toolbar";
import "./app.css";
import * as s from "./app.module.css";
import { AppTheme } from "./theme";

const initialDoc: Doc = {
  handle: null,
  name: "Untitled",
  content: "",
};

export const App = (): JSX.Element => {
  const [layout, setLayout] = useState<Layout>("editor");
  const [doc, setDoc] = useState<Doc>(initialDoc);
  const [editor, setEditor] = useState<Editor | null>(null);
  const { setSettings, settings } = useSettingsState();

  const app = (
    <div className={s.container}>
      {/* <AppTheme settings={settings} /> */}
      {editor !== null ? (
        <div className={s.toolbar}>
          <Toolbar
            layout={layout}
            setLayout={setLayout}
            doc={doc}
            setDoc={setDoc}
            settings={settings}
            setSettings={setSettings}
            editor={editor}
          />
        </div>
      ) : null}
      <div className={s.body}>
        <LayoutContainer
          layout={layout}
          settings={settings}
          editor={editor}
          setEditor={setEditor}
        />
      </div>
    </div>
  );

  return (
    <PromptProvider>
      <Tooltip.Provider>{app}</Tooltip.Provider>
    </PromptProvider>
  );
};
