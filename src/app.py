from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/prep-list")
def prep_list():
    return render_template("prep-list.html")


if __name__ == "__main__":
    app.run(debug=True)
