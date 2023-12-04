/**
 * post/start-job.js
 *
 * Start generatePosts job.
 */
module.exports = function startJob(req, res) {
  sails.hooks.cron.jobs.generatePosts.start();
  return res.ok();

};
