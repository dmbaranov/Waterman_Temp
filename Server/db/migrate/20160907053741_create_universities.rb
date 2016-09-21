class CreateUniversities < ActiveRecord::Migration
  def change
    create_table :universities do |t|
      t.string :name
      t.string :address
      t.string :phone
      t.string :site
      t.text :info
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
