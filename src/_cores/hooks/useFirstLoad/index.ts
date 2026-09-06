"use client";
import { useEffect, useRef, useState } from "react";

export interface ModelResponse<T> { data: T; error?: unknown; }
export interface FirstLoadState<T> { ready: boolean; data: T | null; error: unknown; }

export default function useFirstLoad<T>(source: Promise<ModelResponse<T>> | (() => Promise<ModelResponse<T>>)): FirstLoadState<T>;
export default function useFirstLoad<T, P>(source: (params: P) => Promise<ModelResponse<T>>, params: P): FirstLoadState<T>;
export default function useFirstLoad<T, P>(source: Promise<ModelResponse<T>> | ((params: P) => Promise<ModelResponse<T>>), params?: P): FirstLoadState<T> {
  // This hook intentionally loads only the initial source, once per mount.
  const initial = useRef({ source, params });
  const [state, setState] = useState<FirstLoadState<T>>({ ready: false, data: null, error: false });
  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const { source, params } = initial.current;
        const response = await (typeof source === "function" ? source(params as P) : source);
        if (active) setState({ ready: true, data: response.error ? null : response.data, error: response.error || false });
      } catch (error: unknown) {
        if (active) setState({ ready: true, data: null, error });
      }
    };
    void load();
    return () => { active = false; };
  }, []);
  return state;
}
