# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create({ username: "Guest", password: "password" })
Question.create({ title: "Can you cry under water?", author_id: 1})
Question.create({ title: "How do you write zero in Roman numerals?", author_id: 1 })
Question.create({ title: "Why is it said that an alarm clock is going off when really it's coming on?", author_id: 1 })
Question.create({ title: "Why do they call it 'chili' if it's hot?", author_id: 1})
Question.create({ title: "Why do we call them restrooms when no one goes there to rest?", author_id: 1})
Question.create({ title: "When the French swear do they say pardon my English?", author_id: 1})
Question.create({ title: "If Fed Ex and UPS were to merge, would they call the resulting company Fed UP?", author_id: 1})
Question.create({ title: "If people from Poland are called Poles, why aren't people from Holland called Holes?", author_id: 1})
Question.create({ title: "Where did Webster look up the definitions when he wrote the dictionary?", author_id: 1})
