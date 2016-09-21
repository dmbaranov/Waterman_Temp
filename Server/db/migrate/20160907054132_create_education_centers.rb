class CreateEducationCenters < ActiveRecord::Migration
  def change
    create_table :education_centers do |t|
      t.string :name
      t.string :address
      t.string :email
      t.string :phone
      t.string :site
      t.text :info
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
