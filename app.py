from flask import Flask, render_template, url_for
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)

class Recipe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    ingredients = db.Column(db.String(500), nullable=False)
    instructions = db.Column(db.String(2500), nullable=False)


@app.route('/')
def index(): 
    return render_template('index.html')
if __name__ == "__main__":
    app.run(debug=True)

