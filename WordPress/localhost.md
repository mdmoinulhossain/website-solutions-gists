### PHP ini ###
## memory, HTTP or timeout problems

# To upgrade php.ini file permission
* The first things to check (or ask your host provider to check) are the values of max_execution_time, upload_max_filesize, memory_limit and post_max_size in the php.ini configuration file. 
All of these settings limit the maximum size of data that can be submitted and handled by PHP. 
Please note that post_max_size needs to be larger than upload_max_filesize.

* Changing php.ini at C:\xampp\php\php.ini
```
max_execution_time = 600
max_input_time = 600
memory_limit = 1024M
post_max_size = 1024M
```
* Changing my.ini at C:\xampp\mysql\bin\my.ini
```
max_allowed_packet = 1024M
```
