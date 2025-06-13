from flask import Flask, render_template, jsonify
import requests

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/airquality')
def air_quality():
    url = "https://air-quality-api.open-meteo.com/v1/air-quality?latitude=49.2827&longitude=-123.1207&hourly=pm10,pm2_5,carbon_monoxide"
    response = requests.get(url)
    data = response.json()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True, host="127.0.0.1", port=5000)
