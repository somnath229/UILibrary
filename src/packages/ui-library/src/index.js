import { getRandomColor } from "./utils";
import { h, init } from "snabbdom";
import { propsModule, styleModule, eventListenersModule } from "snabbdom";

const patch = init([propsModule, styleModule, eventListenersModule]);

function UIComponent() {
  const state = {
    count: 0,
    backgroundColor: getRandomColor(),
  };

  const updateState = (newState) => {
    state.count = newState.count;
    state.backgroundColor = newState.backgroundColor || getRandomColor();
    render(); // Re-render when state changes
    console.log("State changed:", state);
  };

  const render = () => {
    if (!element) {
      console.log("Element is null or undefined. Cannot render.");
      return;
    }

    const vNode = h("div", {}, [
      h(
        "h1",
        {
          style: {
            backgroundColor: state.backgroundColor,
            padding: "4rem",
            margin: "2rem",
          },
        },
        "UI Library using Snabbdom and Lerna:"
      ),
      h(
        "h1",
        {
          style: {
            backgroundColor: state.backgroundColor,
            padding: "4rem",
            margin: "2rem",
          },
        },
        state.count
      ), // Initial value of 0
      h(
        "button",
        {
          style: {
            padding: "1rem",
            fontSize: "36px",
            margin: "2rem",
          },
          on: {
            click: () =>
              updateState({
                count: state.count + 1,
                backgroundColor: getRandomColor(),
              }),
          },
        },
        "Add"
      ),
    ]);

    element = patch(element, vNode);
  };

  let element = document.getElementById("root");

  render();
  console.log("Component mounted!");
}

export default UIComponent;
