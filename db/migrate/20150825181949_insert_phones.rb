class InsertPhones < ActiveRecord::Migration
  def change
  	create_table :phones do |t|
  		t.references :contact, index: true
  		t.string :phone_label
  		t.string :phone_number

  		t.timestamps
  	end
  end
end
