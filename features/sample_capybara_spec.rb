ENV['RACK_ENV'] = 'test'

require './app'
require 'capybara'
require 'capybara/rspec'

Capybara.app = Sinatra::Application

feature 'Capybara Test Application' do

  scenario "says Parnell" do
    visit '/'
    click_link('Go to second page')

    expect(page).to have_text('This is the second page')
  end

end
