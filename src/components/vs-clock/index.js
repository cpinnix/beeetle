import create from "../../create";
import { hyper, name, i18n, attrs } from "../../utils";
import "../vs-time";
import "../vs-text";

create(
  name("vs-clock"),
  i18n({
    TEXT: "The current time is ",
    hello: "world"
  }),
  attrs({
    loaded: true
  }),
  hyper(
    (wire, { i18n: { TEXT } }) => wire()`
      <div>
        <vs-text
          props=${() => ({
            text: TEXT
          })}
        >
        </vs-text>
        <vs-time></vs-time>
      </div>
    `
  )
);
