export const waitForMs = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 *
 * @param {Function} job A function when called returns a promise that needs to be awaited for until the job is done.
 * @param {Function} checkJobCompleted A function that is called with the resolved value of the promise and is expected to return a boolean value depending
 * on whether the job is completed or not.
 * @param {Number} delay Time in ms needed to wait before invoking job again.
 * @returns
 */
export const waitForJob = (job, checkJobCompleted, delay = 0) =>
  job().then((jobResponse) => {
    const jobCompeleted = checkJobCompleted(jobResponse);
    if (jobCompeleted) return jobResponse;
    return waitForMs(delay).then(() => waitForJob(job, checkJobCompleted, delay));
  });
