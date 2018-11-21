import hyper from "../../renderers/hyper";
import { create } from "../../../packages/ut-component";
import "../be-time";
import "../be-text";

create({
  name: "be-clock",
  props: {
    i18n: {
      TEXT: "The current time is "
    }
  },
  render: hyper(
    (wire, props) => wire(props)`
      <be-text
        text=${props.i18n.TEXT}
      />
      <be-time />
    `
  )
});
