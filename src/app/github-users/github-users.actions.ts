import { createAction, props } from '@ngrx/store';

export const loadGithubUsersSuccess = createAction('[Github Users] Load data success', props<any>());