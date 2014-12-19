"""
Configures database file needed for migrations
"""

import os
import urlparse

result_file = '../db_config.json'
mongo_uri = os.environ['MONGOLAB_URI']

if __name__ == '__main__':
    db_url = urlparse.urlparse(mongo_uri)

    print 'Database url: ' + str(db_url)
