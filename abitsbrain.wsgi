#!/usr/bin/python3

import sys
import logging
if sys.version_info[0] < 3:
    raise Exception('Python3 required! Current version: %s!' % sys.version_info)
logging.basicConfig(stream=sys.stderr)
sys.path.insert(0, "/var/www/abitsbrain.com/")

from abitsbrain import app as application
#application.secret_key = 'add your secret key'
