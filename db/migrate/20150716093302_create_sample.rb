class CreateSample < ActiveRecord::Migration
  def up
    create_table :samples do |t|
      t.string :name
    end
  end

  def down
    drop_table :samples
  end

end
