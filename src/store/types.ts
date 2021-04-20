import { articlesSlice } from "./articles";

export enum Status {
  Idle = "idle",
  Loading = "loading",
  Success = "success",
  Error = "error",
}

export interface AppState {
  articles: ReturnType<typeof articlesSlice.reducer>;
}
