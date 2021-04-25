import React, { useEffect } from "react";

function Header(props) {
  const {
    content = [],
    setCurrentContent,
    currentContent,
    contactSelected,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = currentContent;
  }, [currentContent]);
  return (
    <header className="flex-row px-1">
      <h2 className="mx-2">
        <a data-testid="link" href="/">
          Priya Macpherson
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a
              data-testid="about"
              href="#about"
              onClick={() => setContactSelected(false)}
            >
              About
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>

          {content.map((content) => (
            <li
              className={`mx-1 ${currentContent === content && "navActive"}`}
              key={content}
            >
              <span
                onClick={() => {
                  setCurrentContent(content);
                  setContactSelected(false);
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
