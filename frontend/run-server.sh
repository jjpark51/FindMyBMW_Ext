#!/bin/bash
pwd
source /root/.bashrc
npm run build

cd build

# #강제 배포 명령어 추가
# npm install -g serve --force

# #기존 serve 프로세스 종료
# kill $(ps -ef | grep "/usr/local/bin/serve -n -s build" | awk '{print $2}')
# echo "Process killed"

# #서버 실행 with 3000 port
# nohup serve -n -s build &

#이건되는대 로그가 안찍힘
# nohup serve -n -s build < /dev/null 2> /dev/null > /dev/null &

# copy the react build files to var/www/html/
sudo cp -r * /var/www/htmlm/

# restart nginx

sudo systemctl restart nginx

