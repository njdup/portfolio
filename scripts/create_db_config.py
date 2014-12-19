"""
Configures database file needed for migrations
"""

import os
import urlparse

result_file = './db_config.json'
mongo_uri = os.environ['MONGOLAB_URI']

if __name__ == '__main__':
    db_url = urlparse.urlparse(mongo_uri)

    host = db_url.hostname
    db_name = db_url.path[1:]
    port = db_url.port
    user = db_url.username
    password = db_url.password

    # Write out the config file
    with open(result_file, 'w+') as output:
        output.write('{ "database": {')
        output.write(' "host": "' + str(host) + '",')
        output.write(' "db": "' + str(db_name) + '",')
        output.write(' "username": "' + str(user) + '",')
        output.write(' "password": "' + str(password) + '",')
        output.write(' "port": "' + str(port) + '"')
        output.write(' } }')

    # Now visually confirm that the file properly written...
    with open(result_file, 'r') as result:
        content = result.read()
        print 'Resulting configuration file: \n {}'.format(content)
