import { Editor } from "../../editor/type";
import { Settings } from "../../settings/type";
import { TemplateContainer } from "../../template/template";
import { usePreviewHtml } from "./html";
import * as s from "./preview.module.css";
import * as sCard from "../card/card.module.css";
import { Scroll } from "../../components/scroll/scroll";

interface Props {
  editor: Editor;
  settings: Settings;
}

export const Preview = ({ editor, settings }: Props): JSX.Element => {

  const html = usePreviewHtml({ editor });

  return (
    <Scroll>
      <div className={s.container}>
        <div className={[s.card, sCard.solid].join(" ")}>
          <TemplateContainer template={settings.template}>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </TemplateContainer>
        </div>
      </div>
    </Scroll>
  );
};
