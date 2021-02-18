import random
import string
from flask_cors import CORS, cross_origin
from flask_restful import Resource

class FourTypeOfData(Resource):
    def get_random_string(self,length):
        result = ''.join(random.choice(string.ascii_letters) for i in range(length))
        return result
    def get_random_integers(self):
        result = random.randint(10000,9999999999)
        return str(result)
    def get_random_float(self):
        secure_random = random.SystemRandom()
        result = secure_random.uniform(10000.9, 9999999.999999)
        return str(result)
    def get_random_alphabet(self):
        source = string.ascii_letters + string.digits
        result = ''.join((random.choice(source) for i in range(15)))
        return str(result)
    def get_four_type_of_data(self):
       return self.get_random_string(10) + ',' + self.get_random_float() + ',' + self.get_random_integers() + ',' + self.get_random_string(8) + ','
    @cross_origin()
    def get(self):
        result = ''
        for x in range(0, 43000):
            result =  result + self.get_four_type_of_data()
        return result
        # f=open('output.txt','w')
        # f.write(42003*self.get_four_type_of_data())
        # f.close()

    