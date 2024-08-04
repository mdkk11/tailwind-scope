import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div css={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <header css={{ display: "flex", alignItems: "center", padding: "8px" }}>
        <div>App</div>
        <nav css={{ marginLeft: "auto" }}>
          <ul css={{ display: "flex", gap: "12px" }}>
            <li>
              <a href={"/emotion"}>Only Emotion</a>
            </li>
            <li>
              <a href={"/emotion-and-tailwind"}>Emotion with Tailwind</a>
            </li>
          </ul>
        </nav>
      </header>
      <div css={{ flex: 1, padding: "12px" }}>
        <Outlet />
      </div>
    </div>
  );
};
