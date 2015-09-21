require 'faraday'
require 'json'

class EchoClient

  def initialize
    @faraday = Faraday.new(url: base_url)
  end

  def get_echo value
    request = @faraday.post("/key/value/one/#{value}")
    JSON.parse((request.body.empty? ? '{}' : request.body), symbolize_names: true)
  end

  private

  def base_url
    "http://#{ENV['JSON_TEST_ECHO_BASE_URL']}"
  end

end