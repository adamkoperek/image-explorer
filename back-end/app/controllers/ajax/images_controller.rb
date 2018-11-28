class Ajax::ImagesController < ApplicationController

  skip_before_action :authenticate

  def index
    images = Image.all
    render json: images
  end

  def show
    if params[:id]
      if Image.exists?(params[:id])
        image = Image.find(params[:id])
        image.full_path = helpers.image_full_path(image)
        render json: image
      else
        render json: {error: 'Image with given id not found.'}
      end
    else
      render json: {error: 'No image id given.'}
    end
  end

end
