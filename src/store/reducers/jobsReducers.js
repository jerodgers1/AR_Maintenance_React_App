import {
    ADD_JOB,
    DELETE_JOB,
    SELECT_JOB,
    DESELECT_JOB
} from "../actions/actionTypes";

const initialState = {
    jobs: ['Change Oil',
        'Change starter',
        'Rotate Tire',
        'Check Timing Belt',
        'Check Fluid levels',
        'Check lights',
        'Check Brake lines',
        'Check Brake pads',
        'Rotate Tire',
        'Check Timing Belt',
        'Check Fluid levels',
        'Check lights',
        'Check Brake lines',
        'Check Brake pads',],
    selectedJob: null,
    showButtons: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_JOB:
            return {
                ...state,
                jobs: state.jobs.concat({
                    //key can be changed later
                    //key: Math.random(),
                    job: action.jobName,
                })
            };
        case DELETE_JOB:
            return {
                ...state,
                jobs: state.jobs.filter(job => {
                    return job.key !== state.selectedJob.key;
                }),
                selectedJob: null
            };
        case SELECT_JOB:
            return {
                ...state,
                selectedJob: action.job,
                showButtons: true,
            };
        case DESELECT_JOB:
            return {
                ...state,
                selectedJobs: null
            };
        default:
            return state;
    }
};

export default reducer;
