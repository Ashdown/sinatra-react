require 'sinatra'
require 'sinatra/activerecord'
require './config/environments'
require 'slim'
Dir[File.join(File.dirname(__FILE__), './lib/clients', '*.rb')].each {|file| require file }
Dir[File.join(File.dirname(__FILE__), './lib/helpers', '*.rb')].each {|file| require file }
Dir[File.join(File.dirname(__FILE__), './lib/models', '*.rb')].each {|file| require file }

set :haml, :format => :html5

helpers SampleHelper, DateHelper, EchoHelper

get '/' do
  slim :index
end