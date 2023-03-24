import { EditorMain } from "../editor/main";
import { EditorState } from "../editor/type";
import { Preview } from "../preview/preview";
import { Settings } from "../settings/type";
import * as s from "./container.module.css";
import { Layout } from "./type";

interface Props extends EditorState {
  layout: Layout;
  settings: Settings;
}

export const LayoutContainer = (props: Props): JSX.Element => {
  const { layout, settings, editor, setEditor } = props;
  return (
    <div className={s.container}>
      {/* Always render Editor to persist its state */}
      <div className={[layout === "preview" ? s.hide : "", s.editor].join(" ")}>
        <EditorMain editor={editor} setEditor={setEditor} settings={settings} />
      </div>
      {/* Only render Preview when necessary to avoid re-calculating HTML
      unnecessarily */}
      {layout !== "editor" && editor !== null ? (
        <div className={s.preview}>
          <Preview settings={settings} editor={editor} />
        </div>
      ) : null}
    </div>
  );
};
