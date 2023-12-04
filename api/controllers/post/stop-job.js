/**
 * post/stop-job.js
 *
 * Stop generatePosts job.
 */
module.exports = function stopJob(req, res) {
  sails.hooks.cron.jobs.generatePosts.stop();
  return res.ok();
};
