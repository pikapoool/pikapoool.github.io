function createDOM(htmlText) {
  return new DOMParser().parseFromString(htmlText, "text/html");
}

function createTemplate(templateText) {
  const dom = createDOM(templateText);
  const template = dom.querySelector("template");
  return template;
}

const template = createTemplate(`
  <template>
    <div>
      <a href="./index.html">Home</a><span> | </span>
      <a href="./promises.html">Promises</a><span> | </span>
      <a href="./symbols.html">Symbol</a><span> | </span>
      <a href="./VirtualDom.html">VirtualDom</a><span> | </span>
      <a href="./angular.html">Angular</a><span> | </span>
      <a href="./node.html">NodeJs</a><span> | </span>
      <a href="https://dou.ua/lenta/articles/interview-questions-javascript-developer/" target="_blank">300+ questions for Junior, Middle, Senior</a>
    </div>
  </template>
`);

class CustomHTMLElement extends HTMLElement {
  constructor() {
    super();
    const templateContent = template.content;
    const shadowRoot = this.attachShadow({ mode: "closed" });
    shadowRoot.appendChild(templateContent.cloneNode(true));
  }
}

customElements.define("nav-element", CustomHTMLElement);
