
require "rubygems"
require 'net/ssh'
require "net/scp"

blacklist = [".", "..", ".DS_Store", ".git"]
project_name = "psyncopate"
user_name = "demo"
server = "50.57.64.194"
port = 30000
file_path = "/home/#{user_name}/apps/#{project_name}"

puts "

*********************************************************************
Connecting to #{server} with user #{user_name} on port #{port} ...
*********************************************************************"


Net::SSH.start(server, user_name, :port => port ) do |ssh|

  puts "deleting file #{file_path}"
  ssh.exec "rm -rf #{file_path}"

  puts "creating file #{file_path}"
  ssh.exec "mkdir #{file_path}"

  Dir.foreach('.') do |file|
    if !blacklist.include?(file)
      puts "Uploading #{file} to #{project_name}"
      ssh.scp.upload! file, "#{file_path}/#{file}"
    else
      puts "The file    #{file}     is on the #{project_name} BLACKLIST"
    end
  end
end
puts "*********************************************************************
FINISHED!!!!!!!!!!!!!!!
*********************************************************************


"


