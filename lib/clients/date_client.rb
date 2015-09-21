require 'faraday'
require 'json'

class DateClient

  def initialize
    @faraday = Faraday.new(url: base_url)
  end

  def get_date
    get_response[:date]
  end

  private

  def get_response
    request = @faraday.get('')
    JSON.parse((request.body.empty? ? '{}' : request.body), symbolize_names: true)
  end

  def base_url
    "http://#{ENV['JSON_TEST_DATE_BASE_URL']}"
  end

end
