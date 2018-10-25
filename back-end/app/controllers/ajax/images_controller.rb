class Ajax::ImagesController < ApplicationController

  skip_before_action :authenticate

  def index
    images = Image.all
    render json: images
  end

end
