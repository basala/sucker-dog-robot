#!/bin/bash

if [ -z $1 ]
then
  url='https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=99168bb4-2bba-4c68-9d95-6e137ca3b7e5'
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