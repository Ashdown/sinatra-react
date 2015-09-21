ENV['RACK_ENV'] = 'test'

require './app'
require 'rspec'
require 'rack/test'

describe 'Sinatra Test Application' do
  include Rack::Test::Methods

  def app
    Sinatra::Application
  end

  it "says Parnell" do
    get '/'
    expect(last_response).to be_ok
    expect(last_response.body.include?('Parnell')).to be true
  end

end