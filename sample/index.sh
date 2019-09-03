#!/bin/bash

if [ -z $1 ]
then
  url='https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=03770be8-e341-4938-9c2a-0ccdd4dddd4e'
else
  url=$1
fi

curl ${url}\
  -H'Content-Type:application\json'\
  -d'
  {
    "msgtype": "text",
    "text": {
      "content": "开饭啦",
      "mentioned_list": ["@all"]
    }
  }'