from flask import Flask, json, request
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)

class Recipe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    ingredients = db.Column(db.String(500), nullable=False)
    instructions = db.Column(db.String(2500), nullable=False)

@app.route('/add', methods=['POST'])
def add_to_db():
    request_data = request.data
    return request_data

if __name__ == "__main__":
    app.run(debug=True)