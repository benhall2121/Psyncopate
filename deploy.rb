

puts "RUBBUNG APP"


require "rubygems"
require 'net/ssh'
require "net/scp"

blacklist = [".", ".."]
project_name = "psyncopate"
user_name = "demo"


Net::SSH.start("50.57.64.194", user_name, :port => 30000 ) do |ssh|
  file_path = "/home/#{user_name}/apps/#{project_name}"

  puts "deleting file #{file_path}"
  ssh.exec "rm -rf #{file_path}"
  
  puts "creating file #{file_path}"
  ssh.exec "mkdir #{file_path}"

  Dir.foreach('.') do |file|
    if !blacklist.include?(file)
      puts "Uploading #{file} to #{project_name}"
      ssh.scp.upload! file, "#{file_path}/#{file}"
    else
      puts "The file: #{file} is on the #{project_name} blacklist"
    end
  end
end



