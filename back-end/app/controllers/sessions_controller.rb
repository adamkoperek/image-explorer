class SessionsController < ApplicationController

  skip_before_action :authenticate

    # sing in action, the proper request param should be like:
    # {"auth": {"login": <user-login>, "password": <user-password>}}
    def create

      # params with no "auth" param inside will cause throwing ParameterMissing exception
      begin

        # get credentials from request params
        credentials = params.require(:auth).permit(:username, :password)

        # if credentials were given in correct structer
        if credentials.permitted? && credentials[:username] && credentials[:password]

          # get user by login
          user = User.find_by(login: credentials[:username])

          # if user was found
          if user

            # if user-passord combination fits
            if user.authenticate(credentials[:password])

              # expiration in seconds from now
              expSecondsFromNow = 60 * 60 * 24 * 365

              # create token
              jwt = Auth.issue({
                user: user.id,
                exp: Time.now.to_i + expSecondsFromNow
              })

              # return token
              render json: {jwt: jwt}

            else
              # if password was wrong
              render json: {error: 'Wrong password'}
            end

          else
            # if user login hasn't been found
            render json: {error: 'User not found'}
          end

        else
          # if there were no 'login' or 'password' param given
          render json: {error: 'Credentials incomplete'}
        end

      rescue ActionController::ParameterMissing
        # if there were no 'auth' param in request
        render json: {error: 'No credentials were given'}
      end
    end

end
