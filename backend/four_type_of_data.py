import random
import string
import json
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
        randomString = 0
        randomFloat = 0
        randomIntegers = 0
        randomAlphabet = 0
        for x in range(0, 150000):
            decision = random.randint(1,4)
            data = ''
            if decision == 1:
                data = self.get_random_string(10)
                randomString = randomString + 1
            elif decision == 2:
                data = self.get_random_float()
                randomFloat =randomFloat + 1
            elif decision == 3:
                data = self.get_random_integers()
                randomIntegers = randomIntegers +1
            elif decision == 4:
                data =  self.get_random_alphabet()
                randomAlphabet = randomAlphabet +1
                if result == '':
                    result =  data
                else:
                    result =  result + ',' + data
            
        a = {
            'randomAlphabet': randomAlphabet,
            'randomFloat':randomFloat,
            'randomIntegers': randomIntegers,
            'randomString': randomString,
            'result': result
        }
        return json.dumps(a)

    