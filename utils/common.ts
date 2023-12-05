/**
 * Delay current function by given time in ms
 * @param {number} time Time delayed
 */
export const delay = (time: number) => new Promise((res) => setTimeout(res, time));
