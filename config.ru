require 'rubygems'
require 'bundler/setup'
require 'sprockets'
require './app'

set :run, false
set :raise_errors, true

map '/assets' do
  environment = Sprockets::Environment.new
  environment.append_path 'assets/stylesheets'
  environment.append_path 'assets/javascripts'

  # if ENV['RACK_ENV'] == 'production'
  #   environment.append_path 'assets/javascripts/app.prod'
  # else
  #   environment.append_path 'assets/javascripts/app'
  # end
  environment.append_path 'assets/images'
  run environment
end

run Sinatra::Application
