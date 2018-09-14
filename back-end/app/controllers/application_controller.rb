class ApplicationController < ActionController::Base
  protect_from_forgery prepend: true
  before_action :authenticate

    def authenticate

      # when JWT 'exp' value is set in token payload it is automaticaly checked
      # and ExpiredSignature exception is thrown while decoding auth token
      begin
        unless logged_in?
          render json: {error: 'Unauthorized'}
        end
      rescue JWT::ExpiredSignature
        render json: {error: "Session Expired"}
      end

    end


    private

    # checks if auth header is present
    def auth_present?
      !!request.env.fetch("HTTP_AUTHORIZATION", "").scan(/Bearer/).flatten.first
    end

    # gets JWT token from auth header
    def token
      if auth_present?
        request.env["HTTP_AUTHORIZATION"].scan(/Bearer (.*)$/).flatten.last
      end
    end

    # decodes token
    def auth
      if token
        Auth.decode token
      end
    end

    # gets user id from decoded token
    def user_id
      if auth
        auth["user"]
      end
    end

    # gets user from id given in token
    def current_user
      if logged_in?
        User.find user_id
      end
    end

    # is user logged in (token was given and checked)
    def logged_in?
      !user_id.nil?
    end
end
