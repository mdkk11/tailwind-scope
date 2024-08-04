import { lazy, Suspense } from "react";

import { RouteObject, useRoutes, BrowserRouter } from "react-router-dom";

import { Layout } from "../layouts/layout";

const Loading = () => (
  <p className="p-4 w-full h-full text-center">Loading...</p>
);

const EmotionPage = lazy(() => import("../pages/Emotion"));
const EmotionAndTailwindPage = lazy(
  () => import("../pages/EmotionAndTailwind"),
);

export const Router = () => {
  return (
    <BrowserRouter>
      <InnerRouter />
    </BrowserRouter>
  );
};

const InnerRouter = () => {
  const routes: RouteObject[] = [
    {
      path: "/emotion",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <EmotionPage />,
        },
      ],
    },
    {
      path: "/emotion-and-tailwind",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <EmotionAndTailwindPage />,
        },
      ],
    },
  ];
  const element = useRoutes(routes);
  return (
    <div>
      <Suspense fallback={<Loading />}>{element}</Suspense>
    </div>
  );
};
