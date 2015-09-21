require './lib/helpers/sample_helper'

describe SampleHelper  do

  before(:each) do
    @dummy_class = Class.new.extend(SampleHelper)
  end

  context '#formal_name' do

    it 'prepends correctly' do

      expect(@dummy_class.formal_name('Dave')).to eq('Charles Stewart Dave')

    end

  end

end
