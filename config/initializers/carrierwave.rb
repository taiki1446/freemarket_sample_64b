require 'carrierwave/storage/abstract'
require 'carrierwave/storage/file'
require 'carrierwave/storage/fog'

CarrierWave.configure do |config|
  config.storage = :fog
  config.fog_provider = 'fog/aws'
  config.fog_credentials = {
    provider: 'AWS',
    aws_access_key_id: Rails.application.credentials.access_key_id,
    aws_secret_access_key: Rails.application.credentials.secret_access_key,
    region: 'ap-northeast-1'
  }

  config.fog_directory  = 'mercari.tamutomo223'
  config.asset_host = 'https://s3-ap-northeast-1.amazonaws.com/mercari.tamutomo223'
end