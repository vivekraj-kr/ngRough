import { createReducer, on } from "@ngrx/store";

import { loadGithubUsersSuccess } from './github-users.actions';

const initialState = {
  data: []
}

export const githubUsersReducer = createReducer(
  initialState, on(loadGithubUsersSuccess, (state, { data }) => ({ ...state, data })) 
);