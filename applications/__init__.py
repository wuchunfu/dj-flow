from component.mysql_pool import patch_mysql
from gevent import monkey
monkey.patch_all(thread=False)
patch_mysql()
