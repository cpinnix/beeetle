import create from "../create";
import { hyper, name, i18n, attrs, didUpdateI18n } from "../../utils";
import "../ui-time";
import "../ui-text";

create(
  name("ui-clock"),
  i18n({
    TEXT: "The current time is "
  }),
  attrs({
    loaded: true
  }),
  hyper(
    (wire, { i18n: { TEXT } }) => wire()`
      <div>
        <ui-text
          props=${() => ({
            text: TEXT
          })}
        >
        </ui-text>
        <ui-time></ui-time>
      </div>
    `
  )
);
