import React, { useEffect } from "react";

function Header(props) {
  const { content = [], setCurrentContent, currentContent } = props;

  return (
    <header
      className="flex-row px-1"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <h2 className="mx-2">
        <a data-testid="link" href="/">
          Priya Macpherson
        </a>
      </h2>
      <nav>
        <ul className="flex-row" style={{ alignItems: "right" }}>
          <li className="mx-2"></li>
          {content.map((content) => (
            <li
              className={`mx-1 ${currentContent === content && "navActive"}`}
              key={content}
            >
              <span
                onClick={() => {
                  setCurrentContent(content);
                }}
              >
                {content}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
