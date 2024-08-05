from flask import Flask

app = Flask(__name__)

@app.route("/data")
def data():
    return {"name": ["Jack Sparrow", "Nick Gale", "Nathan Drake", "Aurora Sen"], "age": [24,25,21,30]}

if __name__ == "__main__":
    app.run(debug=True)