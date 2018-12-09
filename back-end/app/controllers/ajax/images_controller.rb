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
        render json: {
          id: image.id,
          title: image.title,
          file_name: image.file_name,
          size: image.size,
          tags: image.tags.map{|tag| tag.value},
          full_path: helpers.image_full_path(image)
        }
      else
        render json: {error: 'Image with given id not found.'}
      end
    else
      render json: {error: 'No image id given.'}
    end
  end

end
