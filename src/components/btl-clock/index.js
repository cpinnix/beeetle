import hyper from "../../renderers/hyper";
import { create } from "../../beeetle";
import "../btl-time";
import "../btl-text";

create({
  name: "btl-clock",
  props: {
    i18n: {
      TEXT: "The current time is "
    }
  },
  render: hyper(
    (wire, { i18n: { TEXT } }) => wire()`
      <div>
        <btl-text
          text=${TEXT}
        >
        </btl-text>
        <btl-time></btl-time>
      </div>
    `
  )
});
