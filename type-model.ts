import { FJob, FUser } from './type-fixture';

// type extension
type TGender = { gender: 'Male' | 'Female' };

export type TProfile = TGender & typeof FUser['profile'];
export type TJob = typeof FJob;
