import { useCallback, useEffect, useState } from "react";
import { useLocale } from "@/i18n/context";
import { getAllPosts, getSeedPosts } from "@/lib/blog/store";
import type { BlogPost } from "@/lib/blog/types";

export function useBlogPosts() {
  const { locale } = useLocale();
  const [posts, setPosts] = useState<BlogPost[]>(() =>
    typeof window !== "undefined" ? getAllPosts(locale) : getSeedPosts(locale),
  );

  const refresh = useCallback(() => {
    setPosts(getAllPosts(locale));
  }, [locale]);

  useEffect(() => {
    refresh();
    const onStorage = (e: StorageEvent) => {
      if (e.key === "agropure-blog-custom" || e.key === "aquapure-blog-custom") refresh();
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [refresh]);

  return { posts, refresh };
}
