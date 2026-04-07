"use client";
import { useEffect, useLayoutEffect } from "react";

// Use useLayoutEffect on client, useEffect on server to prevent SSR warning
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
