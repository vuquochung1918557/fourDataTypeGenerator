from flask import Flask
from flask_restful import Resource, Api, reqparse
from four_type_of_data import FourTypeOfData

app = Flask(__name__)
api = Api(app)
api.add_resource(FourTypeOfData, '/theAPI/')
if __name__ == "__main__":
  app.run(debug=True)


        