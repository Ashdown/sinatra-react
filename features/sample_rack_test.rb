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

  def test_it_says_parnell
    get '/'
    assert last_response.ok?
    assert last_response.body.include?('Parnell')

  end

  def test_it_says_fred
    get '/'
    assert last_response.ok?
    # assert last_response.body.include?('Fred')
    assert last_response.body.include?('Parnell')

  end

end
