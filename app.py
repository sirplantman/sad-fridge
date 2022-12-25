from flask import Flask, json, request
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)

class Recipe(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    recipe_name = db.Column(db.String)
    instructions = db.Column(db.String)
    prep_time = db.Column(db.Integer)
    description = db.Column(db.String)

class Ingredients(db.Model):
    id = db.Column(db.Integer, primary_key=True) #add foreign key
    recipe_id = db.Column(db.Integer, db.ForeignKey("Recipe.id"))
    ingredients = db.Column(db.String)
    n_ingredients = db.Column(db.Integer)

@app.route('/add', methods=['POST', 'GET'])
def add_to_db():
    request_data = request.data
    return request_data

if __name__ == "__main__":
    app.run(debug=True)
