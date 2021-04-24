import React, { useEffect } from "react";

function Header(props) {
  useEffect(() => {
    document.title = props.currentContent;
  }, [props.currentContent]);

  return (
    <header>
      <h2>Priya Macpherson</h2>
      <nav>
        <ul className="flex-row">
          {props.content.map((content) => (
            <li
              className={`"mx-1" ${
                props.currentContent === content && "navActive"
              }`}
              key={content}
            >
              <span onClick={() => props.contentSelected(content)}>
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
