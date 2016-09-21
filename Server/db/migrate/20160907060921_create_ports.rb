class CreatePorts < ActiveRecord::Migration
  def change
    create_table :ports do |t|
      t.string :name
      t.string :address
      t.string :email
      t.string :phone
      t.string :site
      t.string :receiption
      t.string :delivery
      t.string :testing
      t.string :price
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
