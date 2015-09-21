require './app'
require 'sinatra/activerecord/rake'
require 'rspec/core/rake_task'
require 'jasmine'
require 'jshintrb/jshinttask'

load 'jasmine/tasks/jasmine.rake'

desc 'js validation'
Jshintrb::JshintTask.new :jshint do |task|
  task.pattern = 'assets/javascripts/*.js'
  task.options = Jshintrb::Lint::DEFAULTS.merge({:predef => ['jQuery']})
end

RSpec::Core::RakeTask.new(:spec)

RSpec::Core::RakeTask.new(:feature) do |task|
  task.pattern = 'features/*spec.rb'
end

task :default=>[:spec, :feature, :jshint, :'jasmine:ci']

