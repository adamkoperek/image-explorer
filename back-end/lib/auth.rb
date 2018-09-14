require 'jwt'

class Auth

  # Algorithm used to encoding and decoding JWT token
  ALGORITHM = 'HS256'

  # wraps the JWT.encode method that the jwt gem makes available
  def self.issue(payload)
    JWT.encode(
      payload,
      Rails.application.credentials[Rails.env.to_sym][:auth_secret],
      ALGORITHM)
  end

  def self.decode(token)
    JWT.decode(
      token,
      Rails.application.credentials[Rails.env.to_sym][:auth_secret],
      true,
      { algorithm: ALGORITHM }).first
  end

end
