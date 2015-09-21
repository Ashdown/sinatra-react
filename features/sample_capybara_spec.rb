ENV['RACK_ENV'] = 'test'

require './app'
require 'capybara'
require 'capybara/rspec'

Capybara.app = Sinatra::Application

feature 'Capybara Test Application' do

  scenario "says Home Page" do
    visit '/'

    expect(page).to have_text('Home Page')
  end

end
