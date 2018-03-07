import { ADD_JOB, DELETE_JOB, SELECT_JOB, DESELECT_JOB } from './actionTypes';

export const addJob = (jobName) => {
    return {
        type: ADD_JOB,
        jobName: jobName
    };
};

export const deleteJob = () => {
    return {
        type: DELETE_JOB
    };
};

export const selectJob = (jobName) => {
    return {
        type: SELECT_JOB,
        job: jobName
    };
};

export const deselectJob = () => {
    return {
        type: DESELECT_JOB
    };
};