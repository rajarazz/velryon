import { Suspense, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

export function SplineScene({ scene, className }) {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          <span className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent" />
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}
