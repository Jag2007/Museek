import { useEffect, useState } from "react";

export default function RevisitAnimator({ path, children }) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    function onRevisit(e) {
      if (!e?.detail?.path || e.detail.path !== path) return;
      setKey((k) => k + 1);
    }
    window.addEventListener("route-revisit", onRevisit);
    return () => window.removeEventListener("route-revisit", onRevisit);
  }, [path]);

  return (
    <div
      key={key}
      className="animate-[routeRevisit_280ms_ease-out]"
      style={{
        animationName: key ? "routeRevisit" : undefined,
        animationDuration: key ? "280ms" : undefined,
      }}
    >
      {children}
    </div>
  );
}
