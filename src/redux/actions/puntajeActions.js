export const SUM_POINT = 'SUM_POINT';
export const RESET_POINT = 'RESET_POINT';

export let addPoint = () => {
    return {
        type: SUM_POINT
    }
}

export let resetPoint = () => {
    return {
        type: RESET_POINT
    }
}
