class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.string :body
      t.integer :priority
      t.boolean :done

      t.timestamps
    end
  end
end
