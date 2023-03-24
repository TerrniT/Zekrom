import { Settings } from "../settings/type";
import { EditorInput } from "./input/input";
import * as s from "./main.module.css";
import { EditorStatus } from "./status/status";
import { useEditorTheme } from "./theme/theme";
import { EditorState } from "./type";

interface Props extends EditorState {
  settings: Settings;
}

export const EditorMain = ({ editor, setEditor, settings }: Props): JSX.Element => {

  useEditorTheme({ settings });

  return (
    <div className={s.container}>
      <div className={s.input}>
        <EditorInput
          setEditor={setEditor}
          editor={editor}
          settings={settings}
        />
      </div>
      {editor !== null ? (
        <div className={s.status}>
          <EditorStatus editor={editor} settings={settings} />
        </div>
      ) : null}
    </div>
  );
};
