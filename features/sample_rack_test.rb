ENV['RACK_ENV'] = 'test'

Dir.chdir "../"

require './app'
require 'test/unit'
require 'rack/test'

class SampleRackTest < Test::Unit::TestCase
  include Rack::Test::Methods

  def app
    Sinatra::Application
  end

  def test_it_says_roosevelt
    get '/'
    assert last_response.ok?
    assert last_response.body.include?('Roosevelt')

  end

  def test_it_says_roosevelt
    get '/'
    assert last_response.ok?
    assert last_response.body.include?('Roosevelt')

  end

end
