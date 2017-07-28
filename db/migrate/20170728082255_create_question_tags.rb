class CreateQuestionTags < ActiveRecord::Migration[5.0]
  def change
    create_table :question_tags do |t|
      t.integer :question_id, null: false
      t.integer :tag_id, null: false
      t.timestamps
    end
    add_index :question_tags, :question_id, unique: true
    add_index :question_tags, :tag_id, unique: true
  end
end
