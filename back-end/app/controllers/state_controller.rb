class StateController < ApplicationController
  def index
    # render json: Dir.glob('D:/Photos/**/*')
    render json: Dir.entries('D:/Photos/')
  end
end
