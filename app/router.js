import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin', function() {
    this.route('index');
    this.route('settings');
    this.route('resume');

    this.route('posts', function() {
      this.route('new');
      this.route('index', { path: '/' });
    });
    this.route('post', { path: 'post/:post_id' });

    this.route('projects', function() {
      this.route('new');
      this.route('index', { path: '/' });
    });
    this.route('project', { path: 'project/:project_id' });
  });

  this.route('projects', function() {
    this.route('project', { path: 'projects/:project_id' });
  });

  this.route('posts', function() {
    this.route('post');
  });

  this.route('about');
  this.route('site');
});

export default Router;
